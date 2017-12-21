import styled from 'react-emotion';

export const Title = styled.h1`
  display: block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 36px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: ${p => p.theme.padding}px;
`;

export const Paragraph = styled.p`
  margin-bottom: ${p => p.theme.padding}px;
`;

export const Heading = styled.h2`
  font-family: ${p => p.theme.fonts.futura};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
`;

export const SubHeading = styled.h3`
  font-family: ${p => p.theme.fonts.futura};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
`;

export const BoldHeading = styled.h4`
  font-family: ${p => p.theme.fonts.futura};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

export const Embed = styled.div`
  margin: 20px 0;
`;

export const List = styled.ul`
  list-style-type: disc;
  margin: 0 0 20px 32px;
`;

export const OrderedList = styled.ol`
  list-style-type: decimal;
  margin: 0 0 20px 32px;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  margin-bottom: ${p => p.theme.padding}px;
  max-width: 100%;
`;
