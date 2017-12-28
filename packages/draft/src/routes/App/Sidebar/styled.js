import styled from 'react-emotion';
import { headingStyles } from 'styles/utils';

export const Heading = styled.h2`
  ${headingStyles};
  color: ${p => p.theme.colors.dark};
  font-family: ${p => p.theme.fonts.futura};
  font-size: 25px;
`;

export const Show = styled.div`
  font-size: 15px;
  margin: 0 0 10px 10px;
`;

export const Time = styled.time`
  display: block;
  font-size: 14px;
  font-weight: ${p => p.theme.fonts.weight.bold};
`;
