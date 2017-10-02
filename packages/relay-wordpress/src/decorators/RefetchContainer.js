import { createRefetchContainer } from 'react-relay';

export default (spec, refetch) => component => createRefetchContainer(component, spec, refetch);
