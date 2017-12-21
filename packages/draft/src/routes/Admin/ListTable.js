import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Select from 'components/Form/Select';
import Checkbox from 'components/Form/Checkbox';
import { Table, StripedRow, CellHeading, Cell, CheckboxCell } from 'styles/utils';
import { Filters, Pagination } from './styled';

/* eslint-disable react/prop-types */

const PER_PAGE = 20;

export default class ListTable extends Component {
  state = {
    checked: [],
    all: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  bulkAction = value => {
    if (value === 'deleteAll' && this.state.checked.length) {
      const options = {
        variables: {
          ids: this.state.checked,
        },
      };

      if (this.props.query && this.props.variables) {
        options.refetchQueries = [
          {
            query: this.props.query,
            variables: this.props.variables,
          },
        ];
      }

      this.props.mutate(options);
    }
  };

  toggleAll = checked => {
    let ids;
    if (checked) {
      ids = this.props.data.edges.map(({ node }) => node.id);
    } else {
      ids = [];
    }
    this.setState({ checked: ids, all: checked });
  };

  toggleCheck = (checked, id = null) => {
    if (!id) {
      return;
    }
    const ids = [...this.state.checked];
    let { all } = this.state;
    if (checked) {
      ids.push(id);
    } else {
      all = false;
      ids.splice(ids.indexOf(id), 1);
    }
    this.setState({ checked: ids, all });
  };

  render() {
    const { location, match: { params }, data, path, columns, filters } = this.props;

    if (!data || !data.edges || !data.edges.length) {
      return <p>No items found.</p>;
    }

    const LinkTo = ({ to = '', children }) => (
      <Link to={{ pathname: `${path}${to}`, search: location.search }}>{children}</Link>
    );

    const headers = (
      <tr>
        <CheckboxCell>
          <Checkbox checked={this.state.all} onChange={this.toggleAll} />
        </CheckboxCell>
        {columns.map((column, i) => (
          <CellHeading className={cn(column.className)} key={i.toString(16)}>
            {column.label}
          </CellHeading>
        ))}
      </tr>
    );

    const pages = data.count > 0 ? Math.ceil(data.count / PER_PAGE) : 0;
    const firstPage = pages === 0 ? 0 : 1;
    const currentPage = params.page ? parseInt(params.page, 10) : firstPage;
    const paginated = currentPage && currentPage > 1;
    let previousUrl = null;
    let nextUrl = null;
    if (paginated) {
      if (currentPage - 1 > 1) {
        previousUrl = `/page/${currentPage - 1}`;
      } else {
        previousUrl = '';
      }
    }
    if (currentPage !== pages && data.pageInfo.hasNextPage) {
      nextUrl = `/page/${currentPage + 1}`;
    }

    const paginationMatrix = (
      <Pagination>
        <strong>{data.count} items</strong>
        {paginated ? <LinkTo>«</LinkTo> : <span>«</span>}
        {previousUrl === null ? <span>‹</span> : <LinkTo to={previousUrl}>‹</LinkTo>}
        <strong>
          {paginated ? currentPage : firstPage} of {pages}
        </strong>
        {nextUrl === null ? <span>›</span> : <LinkTo to={nextUrl}>›</LinkTo>}
        {currentPage !== pages ? <LinkTo to={`/page/${pages}`}>»</LinkTo> : <span>»</span>}
      </Pagination>
    );

    return (
      <Fragment>
        <Filters>
          {this.props.mutate && (
            <Select
              key="bulk"
              placeholder="Bulk Actions"
              choices={[{ label: 'Delete', value: 'deleteAll' }]}
              onChange={this.bulkAction}
            />
          )}
          {filters}
          {paginationMatrix}
        </Filters>
        <Table>
          <thead>{headers}</thead>
          <tbody>
            {data.edges.map(({ node }) => (
              <StripedRow key={node.id}>
                <CheckboxCell>
                  <Checkbox
                    checked={this.state.checked.includes(node.id)}
                    id={node.id}
                    onChange={this.toggleCheck}
                  />
                </CheckboxCell>
                {columns.map((column, i) => (
                  <Cell key={i.toString(16)} className={cn(column.className)}>
                    {column.render ? column.render(node, this.props) : node[column.prop]}
                  </Cell>
                ))}
              </StripedRow>
            ))}
          </tbody>
          <tfoot>{headers}</tfoot>
        </Table>
        <Filters>{paginationMatrix}</Filters>
      </Fragment>
    );
  }
}
