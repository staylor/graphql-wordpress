import { css } from 'emotion';
import styled from 'react-emotion';
import { withTheme } from 'theming';
import { button } from '../';
import { clear } from '../global';
import theme from '../theme';
import responsive from '../responsive';

// Comments

export const CommentsWrapper = withTheme(styled.aside`
  margin-top: ${p => p.theme.padding * 3}px;
  max-width: 100%;

  ${responsive.tablet} {
    width: 450px;
  }
`);

// Walker

export const nested = css`margin: 20px 0 20px 20px;`;
export const ListItem = styled.li`margin: 10px 0 20px;`;

// Form

export const CommentForm = styled.form`
  margin: 20px 0 40px;
  width: 300px;
`;

export const Field = styled.p`margin: 5px 0;`;

export const Label = withTheme(styled.label`
  display: block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 16px;
  line-height: 20px;
`);

export const submit = css`
  font-size: 16px;
  line-height: 20px;
  padding: 8px;
  width: 80px;
`;

export const reset = css`
  font-size: 16px;
  line-height: 20px;
  margin: 0 10px;
  padding: 8px;
`;

// Comment
export const CommentWrapper = withTheme(styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.detail};
  position: relative;
`);

export const Meta = styled.div`composes: ${clear};`;

export const Image = styled.img`
  float: left;
  margin: 0 10px 10px 0;
`;

export const Content = styled.div`
  & p {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Reply = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;

  &:active,
  &:focus {
    outline: 0 none;
  }
`;

export const Actions = styled.div`margin: 5px 0;`;

export const activeReply = css`color: ${theme.colors.pink};`;

export const EditButton = withTheme(styled.button`
  background: transparent;
  border: 1px solid ${p => p.theme.colors.detail};
  cursor: pointer;
  transition: 600ms;

  &:hover {
    border: 1px solid ${p => p.theme.colors.dark};
  }

  &:active,
  &:focus {
    outline: 0 none;
  }
`);

export const Author = withTheme(styled.span`
  display: block;
  text-transform: uppercase;

  & a {
    color: ${p => p.theme.colors.dark};
  }
`);
export const Time = styled.span`display: block;`;

// Comment Edit
export const EditForm = styled.form`margin: 0 0 20px;`;

export const EditCancelButton = withTheme(styled.button`
  composes: ${button};
  background: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.dark};
  margin: 0 5px;
`);

export const DeleteButton = withTheme(styled.button`
  background: transparent;
  border: 0 none;
  color: ${p => p.theme.colors.pink};
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    text-decoration: underline;
  }
`);
