import styled from 'react-emotion';
import themeUtils from 'styles/theme';
import { h1styles, h2Styles, h3Styles, h4Styles } from 'styles/utils';

export const Wrapper = styled.article`
  width: 640px;
  max-width: 100%;
`;

export const Title = styled.h1`
  ${h1styles};
  color: ${themeUtils.colors.dark};
`;

export const Paragraph = styled.p`
  margin-bottom: 24px;

  a {
    color: ${themeUtils.colors.pink};
  }
`;

export const Heading = styled.h2`
  ${h2Styles};
  color: ${themeUtils.colors.dark};
`;

export const SubHeading = styled.h3`
  ${h3Styles};
  color: ${themeUtils.colors.dark};
`;

export const BoldHeading = styled.h4`
  ${h4Styles};
  color: ${themeUtils.colors.dark};
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
