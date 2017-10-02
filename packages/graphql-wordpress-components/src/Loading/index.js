import React from 'react';
import { css, keyframes } from 'emotion';
import styled from 'react-emotion';
import { withTheme } from 'theming';
import theme from '../theme';

export const Container = withTheme(styled.div`
  background: ${p => p.theme.colors.white};
  min-height: 400px;
  padding: 200px 0 0;
`);

const Wrap = styled.div`
  height: 40px;
  margin: 0 auto;
  position: relative;
  width: 40px;
`;

const bounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`;

const bouncing = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${theme.colors.pink};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2s infinite ease-in-out;
`;

const Bounce1 = styled.div`composes: ${bouncing};`;
const Bounce2 = styled.div`
  composes: ${bouncing};
  animation-delay: -1s;
`;

export default function Loading() {
  return (
    <Container>
      <Wrap>
        <Bounce1 />
        <Bounce2 />
      </Wrap>
    </Container>
  );
}
