import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ThemeProvider } from 'emotion-theming';
import fetch from 'isomorphic-fetch';
import Cookies from 'js-cookie';
import Message from 'components/Form/Message';
import { TOKEN_KEY } from 'utils/constants';
import {
  wrapperClass,
  contentClass,
  titleClass,
  formClass,
  labelClass,
  inputClass,
  buttonClass,
} from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query LoginQuery($id: String) {
      settings(id: $id) {
        ... on SiteSettings {
          siteTitle
          siteUrl
        }
      }
    }
  `,
  {
    options: {
      variables: { id: 'site' },
    },
  }
)
export default class Login extends Component {
  constructor(props, context) {
    super(props, context);

    const { match: { params } } = props;

    let error = '';
    if (params.action) {
      switch (params.action) {
        case 'unauthorized':
          error = 'You must login to access this area.';
          break;
        default:
          break;
      }
    }

    this.state = { error };
  }

  submitForm = e => {
    e.preventDefault();

    this.form.blur();

    const inputs = this.form.elements;

    if (!inputs.email.value || !inputs.password.value) {
      this.setState({ error: 'All fields are required.' });
    }

    fetch(`${this.props.data.settings.siteUrl}/auth`, {
      method: 'POST',
      body: JSON.stringify({
        email: inputs.email.value,
        password: inputs.password.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
        Cookies.set(TOKEN_KEY, data.token, { expires: 7, path: '/' });
        window.location.pathname = '/admin';
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  };

  render() {
    const { data: { loading, settings } } = this.props;

    if (loading && !settings) {
      return null;
    }

    return (
      <ThemeProvider theme={{}}>
        <div className={wrapperClass}>
          <div className={contentClass}>
            <h1 className={titleClass}>{settings.siteTitle}</h1>
            {this.state.error && <Message text={this.state.error} />}
            <form
              className={formClass}
              method="post"
              ref={form => {
                this.form = form;
              }}
              onSubmit={this.submitForm}
            >
              <label className={labelClass} htmlFor="email">
                Email
                <input className={inputClass} type="text" name="email" />
              </label>
              <label className={labelClass} htmlFor="password">
                Password
                <input className={inputClass} type="password" name="password" />
              </label>
              <button className={buttonClass} type="submit">
                Log In
              </button>
            </form>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
