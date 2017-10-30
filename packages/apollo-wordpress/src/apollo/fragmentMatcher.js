import { IntrospectionFragmentMatcher } from 'react-apollo';
import introspectionQueryResultData from '../../tools/fragmentMatcher.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

export default fragmentMatcher;
