import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Checkbox from 'components/Form/Checkbox';
import { Table, StripedRow, CellHeading, Cell, CheckboxCell } from 'styles/utils';
import { Filters, Pagination } from './styled';

/* eslint-disable react/prop-types */

const PER_PAGE = 20;

export default class ListTable extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

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
          <Checkbox name="all" />
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
          {filters}
          {paginationMatrix}
        </Filters>
        <Table>
          <thead>{headers}</thead>
          <tbody>
            {data.edges.map(({ node }) => (
              <StripedRow key={node.id}>
                <CheckboxCell>
                  <Checkbox name="deleteme" />
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
