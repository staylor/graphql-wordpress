import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Sizer from './Sizer';
import { ImageWrap, Image as StyledImage } from './styled';

/* eslint-disable react/prop-types */

const cropMap = {
  FEATURE: 640,
  MEDIUM: 300,
  THUMB: 150,
};

export default class Image extends Component {
  state = {};

  static contextTypes = {
    setReadOnly: PropTypes.func,
  };

  showTools(e) {
    e.stopPropagation();
    this.context.setReadOnly(true, () => {
      const bounds = this.image.getBoundingClientRect();
      this.setState({ showTools: true, bounds });
    });
  }

  hideTools(e) {
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
        className={cn({
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
        <StyledImage alt="" src={`/uploads/${image.destination}/${crop.fileName}`} />
      </ImageWrap>
    );
  }
}
