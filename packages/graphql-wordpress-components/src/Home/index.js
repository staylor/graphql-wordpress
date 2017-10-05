import styled from 'react-emotion';
import { Link } from 'found';
import { uppercaseHeader } from '../';
import responsive from '../responsive';

export const HomeWrapper = styled.div`
  ${responsive.tablet} {
    display: flex;
    margin-right: ${p => p.theme.padding * 1.5}px;
  }
`;
export const HomeSection = styled.section`margin: 0 0 40px;`;
export const HomeHeader = styled.h2`${uppercaseHeader};`;

export const ColumnA = styled.div`
  ${responsive.tablet} {
    flex: 1;
    margin-right: ${p => p.theme.padding * 1.5}px;
  }
`;

export const ColumnB = styled.div`
  ${responsive.tablet} {
    flex: 2;
    margin-right: ${p => p.theme.padding * 1.5}px;
  }
`;

export const MoreIn = styled(Link)`
  font-family: ${p => p.theme.fonts.futura};
  color: ${p => p.theme.colors.black};
  display: block;
  font-size: 11px;
  font-weight: ${p => p.theme.weightBold};
  line-height: 16px;
  margin-bottom: ${p => p.theme.padding * 2}px;
  text-transform: uppercase;
`;
