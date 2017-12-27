import styled from 'react-emotion';

export const Filters = styled.section`
  margin: 6px 0;
  overflow: hidden;
`;

export const Pagination = styled.nav`
  float: right;
  font-size: 13px;
  user-select: none;

  strong {
    display: inline-block;
    font-weight: 400;
    margin: 0 3px;
    min-width: 65px;
    text-align: center;
    user-select: none;
  }

  span,
  a {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    height: 16px;
    line-height: 1;
    margin: 0 2px;
    min-width: 17px;
    padding: 3px 5px 7px;
    text-align: center;
    user-select: none;
  }

  span {
    border: 1px solid #ddd;
    background: #f7f7f7;
    color: #a0a5aa;
  }

  a {
    border: 1px solid #ccc;
    background: #e5e5e5;
    text-decoration: none;
  }
`;
