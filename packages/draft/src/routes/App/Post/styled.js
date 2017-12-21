import styled from 'react-emotion';
import { css } from 'emotion';
import theme from 'styles/theme';

const headingStyle = css`
  display: block;
  font-family: ${theme.fonts.futura};
  font-weight: 600;
  line-height: 1.4;
`;

export const Title = styled.h1`
  ${headingStyle};
  display: block;
  font-size: 36px;
  margin-bottom: ${p => p.theme.padding}px;
`;

export const Paragraph = styled.p`
  margin-bottom: ${p => p.theme.padding}px;
`;

export const Heading = styled.h2`
  ${headingStyle};
  font-size: 24px;
`;

export const SubHeading = styled.h3`
  ${headingStyle};
  font-size: 20px;
`;

export const BoldHeading = styled.h4`
  ${headingStyle};
  font-size: 18px;
`;

export const Embed = styled.div`
  margin: 20px 0;
`;

export const Image = styled.img`
  display: block;
  margin: 20px 0;
`;
