// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import type { ContentState } from 'draft-js';
import type DraftEntityInstance from 'draft-js/lib/DraftEntityInstance';
import { uploadUrl } from 'utils/media';
import Sizer from './Sizer';
import { ImageWrap, Image as StyledImage } from './styled';

const cropMap = {
  FEATURE: 640,
  MEDIUM: 300,
  THUMB: 150,
};

type Props = {
  contentState: ContentState,
  entityKey: string,
  entity: DraftEntityInstance,
};

type State = {
  showTools: boolean,
  bounds: {},
};

export default class Image extends Component<Props, State> {
  state = {
    showTools: false,
    bounds: {},
  };
  image: HTMLImageElement;

  static contextTypes = {
    setReadOnly: PropTypes.func,
  };

  showTools(e: Event) {
    e.stopPropagation();
    this.context.setReadOnly(true, () => {
      const bounds = this.image.getBoundingClientRect();
      this.setState({ showTools: true, bounds });
    });
  }

  hideTools(e: Event) {
    e.stopPropagation();
    this.context.setReadOnly(false, () => {
      this.setState({ showTools: false, bounds: {} });
    });
  }

  render() {
    const { contentState, entityKey, entity } = this.props;
    const { image, size } = entity.getData();
    const crop = image.crops.find(c => c.width === cropMap[size]);

    return (
      <ImageWrap
        className={cx({
          'Image-FEATURE': size === 'FEATURE',
          'Image-MEDIUM': size === 'MEDIUM',
          'Image-SMALL': size === 'THUMB',
        })}
        innerRef={ref => {
          this.image = ref;
        }}
        onMouseEnter={e => this.showTools(e)}
        onMouseLeave={e => this.hideTools(e)}
      >
        {this.state.showTools && (
          <Sizer bounds={this.state.bounds} {...{ contentState, entityKey }} />
        )}
        <StyledImage alt="" src={uploadUrl(image.destination, crop.fileName)} />
      </ImageWrap>
    );
  }
}
