import { createFragmentContainer } from 'react-relay';

export default spec => component => createFragmentContainer(component, spec);
