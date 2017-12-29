import React, { Component, Fragment } from 'react';
import Input from 'components/Form/Input';
import { TagWrap, Tag, DeleteTag } from './styled';

/* eslint-disable react/prop-types */

export default class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: props.tags || [],
    };
  }

  onKeyDown = e => {
    if (e.which === 13) {
      const pending = [...this.state.pending];
      pending.push(e.target.value);
      const unique = [...new Set(pending)];
      this.props.onChange(unique);
      this.setState({ pending: unique });
    }
  };

  bindClick = tag => e => {
    e.preventDefault();
    const pending = [...this.state.pending];
    pending.splice(pending.indexOf(tag), 1);
    this.props.onChange(pending);
    this.setState({ pending });
  };

  render() {
    return (
      <Fragment>
        <Input
          placeholder="Type tag then press ENTER"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        <TagWrap>
          {this.state.pending.map(tag => (
            <Tag key={tag}>
              <DeleteTag onClick={this.bindClick(tag)} /> {tag}
            </Tag>
          ))}
        </TagWrap>
      </Fragment>
    );
  }
}
