import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import { Field, FieldName, FieldValue } from 'components/Field/styled';
import Input from 'components/Field/Input';
import { Heading, Button } from '../styled';

/* eslint-disable react/prop-types */

const tagFields = [
  { label: 'ID', prop: 'id' },
  { label: 'Name', prop: 'name', editable: true },
  { label: 'Slug', prop: 'slug' },
];

@compose(
  graphql(
    gql`
      query TagAdminQuery($id: String) {
        tag(id: $id) {
          id
          name
          slug
        }
      }
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.id },
      }),
    }
  ),
  graphql(gql`
    mutation UpdateTagMutation($id: String!, $input: UpdateTagInput!) {
      updateTag(id: $id, input: $input) {
        id
        name
        slug
      }
    }
  `)
)
export default class TagRoute extends Component {
  boundRefs = {};

  bindRef = prop => ref => {
    this.boundRefs[prop] = ref;
  };

  onClick = e => {
    e.preventDefault();

    const updates = tagFields.reduce((memo, field) => {
      if (field.editable) {
        memo[field.prop] = this.boundRefs[field.prop].value;
      }
      return memo;
    }, {});

    const { tag } = this.props.data;
    this.props.mutate({
      variables: {
        id: tag.id,
        input: updates,
      },
    });
  };

  render() {
    const { data: { loading, tag } } = this.props;

    if (loading && !tag) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Edit Tag</Heading>
        {tagFields.map(field => (
          <Field key={field.prop}>
            <FieldName>{field.label}</FieldName>
            {field.editable ? (
              <Input
                innerRef={this.bindRef(field.prop)}
                value={field.render ? field.render(tag) : tag[field.prop]}
              />
            ) : (
              (field.render && field.render(tag)) || <FieldValue>{tag[field.prop]}</FieldValue>
            )}
          </Field>
        ))}
        <Button onClick={this.onClick}>Update Tag</Button>
      </Fragment>
    );
  }
}
