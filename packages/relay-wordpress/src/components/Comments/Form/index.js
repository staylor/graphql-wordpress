// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';
import { SubmitButton, ResetButton, formField } from '@wonderboymusic/graphql-wordpress-components';
import {
  CommentForm,
  Field,
  Label,
  submit,
  reset,
} from '@wonderboymusic/graphql-wordpress-components/lib/Comments';
import AddCommentMutation from 'mutations/AddComment';
import {
  AUTHOR_NAME_COOKIE,
  AUTHOR_EMAIL_COOKIE,
  AUTHOR_URL_COOKIE,
} from 'components/Comments/constants';
import type { CommentFormProps, CommentFormState } from 'relay-wordpress';

const fields = {
  authorName: { name: 'Name', cookie: AUTHOR_NAME_COOKIE },
  authorEmail: { name: 'Email', cookie: AUTHOR_EMAIL_COOKIE },
  authorUrl: { name: 'URL', cookie: AUTHOR_URL_COOKIE },
};

const getDefaultState = props => {
  const state = {
    content: '',
  };

  Object.keys(fields).forEach(field => {
    state[field] = props.cookies.get(fields[field].cookie) || '';
  });

  return state;
};

@withCookies
export default class Form extends React.Component<CommentFormProps, CommentFormState> {
  static contextTypes = {
    relay: PropTypes.object,
  };

  static defaultProps = {
    replyTo: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      comment: getDefaultState(props),
    };
  }

  onClick = e => {
    e.preventDefault();
    e.currentTarget.blur();

    const variables = {
      input: {
        ...this.state.comment,
        post: this.props.post,
      },
    };

    if (this.props.replyTo) {
      variables.input.parent = this.props.replyTo;
    }

    AddCommentMutation.commit(this.context.relay.environment, variables, () => {
      this.setState({
        comment: getDefaultState(this.props),
      });
    });
  };

  onChange = e => {
    this.setState({
      comment: {
        ...this.state.comment,
        [e.target.name]: e.target.value,
      },
    });
  };

  onCancel = () => {
    this.props.setReplyTo(null);
  };

  render() {
    const { cookies } = this.props;

    return (
      <CommentForm onSubmit={e => e.preventDefault()}>
        {Object.keys(fields).map(field => {
          const cookieVal = cookies.get(fields[field].cookie);
          return (
            <Field key={field}>
              <Label htmlFor={`field-${field}`}>{fields[field].name}:</Label>
              {cookieVal || (
                <input
                  className={formField}
                  type="text"
                  id={`field-${field}`}
                  name={field}
                  value={this.state.comment[field]}
                  onChange={this.onChange}
                />
              )}
            </Field>
          );
        })}
        <Field>
          <Label htmlFor="field-content">Comment:</Label>
          <textarea
            className={formField}
            rows="6"
            id="field-content"
            name="content"
            value={this.state.comment.content}
            onChange={this.onChange}
          />
        </Field>
        <SubmitButton type="submit" className={submit} onClick={this.onClick}>
          Submit
        </SubmitButton>
        {this.props.replyTo ? (
          <ResetButton type="reset" className={reset} onClick={this.onCancel}>
            Cancel
          </ResetButton>
        ) : null}
      </CommentForm>
    );
  }
}
