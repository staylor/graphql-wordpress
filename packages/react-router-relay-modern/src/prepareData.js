import { matchRoutes, renderRoutes } from 'react-router-config';
import QuerySubscription from './QuerySubscription';

export default ({ routes, environment, url }) => {
  const matches = matchRoutes(routes, url);
  const { createOperationSelector, getOperation } = environment.unstable_internal;
  const subscriptions = matches.reduce((memo, match) => {
    const { query = null, variables = {}, cacheConfig = {} } = match.route;
    if (query) {
      memo.push(
        new QuerySubscription(
          environment,
          createOperationSelector(getOperation(query), variables),
          cacheConfig
        )
      );
    }
    return memo;
  }, []);
  const fetches = await Promise.all(subscriptions.map(subscription => subscription.fetch()));
  const earlyData = await Promise.all(fetches.map(checkResolved));
  if (!earlyData.every(isResolved)) {
    await Promise.all(fetches);
  }
  return subscriptions;
};
