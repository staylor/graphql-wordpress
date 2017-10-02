import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formField } from 'wp-styled-components';
import { EditForm, EditCancelButton } from 'wp-styled-components/lib/Comments';
import { CommentType } from '../types';
import SubmitButton from './SubmitButton';

export default class Edit extends Component {
  static propTypes = {
    comment: CommentType.isRequired,
    token: PropTypes.string.isRequired,
    onEditSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      content: props.comment.content.raw,
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { comment, token, onEditSubmit } = this.props;
    return (
      <EditForm onSubmit={e => e.preventDefault()}>
        <textarea
          className={formField}
          rows="6"
          name="content"
          value={this.state.content}
          onChange={this.onChange}
        />
        <SubmitButton content={this.state.content} {...{ comment, token, onEditSubmit }} />
        <EditCancelButton type="reset" onClick={this.props.onEditSubmit}>
          Cancel
        </EditCancelButton>
      </EditForm>
    );
  }
}
