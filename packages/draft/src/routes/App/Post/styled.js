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
  margin-bottom: 24px;
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

export const List = styled.ul`
  list-style-type: disc;
  margin: 20px 0 20px 32px;
`;

export const OrderedList = styled.ol`
  list-style-type: decimal;
  margin: 20px 0 20px 32px;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  margin: 10px 0;
  max-width: 100%;
`;
