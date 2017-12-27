import React, { Component, Fragment } from 'react';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from 'components/Form';
import { Heading, Line } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

export default class SettingsForm extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          id: this.props.id,
          input: updates,
        },
      })
      .then(() => {
        this.setState({ message: 'updated' });
        document.documentElement.scrollTop = 0;
      })
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const {
      title,
      buttonText = 'Update Settings',
      data: { loading, settings },
      settingsFields,
    } = this.props;

    return (
      <Fragment>
        <Heading>{title}</Heading>
        <Line />
        {this.state.message === 'updated' && <Message text="Settings Updated." />}
        {loading && !settings ? (
          <Loading />
        ) : (
          <Form
            fields={settingsFields}
            data={settings || {}}
            buttonLabel={buttonText}
            onSubmit={this.onSubmit}
          />
        )}
      </Fragment>
    );
  }
}
