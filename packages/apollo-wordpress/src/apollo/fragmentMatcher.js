import { IntrospectionFragmentMatcher } from 'react-apollo';
import __schema from '../../tools/fragmentMatcher.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: __schema,
});

export default fragmentMatcher;
