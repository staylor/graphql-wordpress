import apolloClient from 'apollo/client';

export default (req, res, next) => {
  const port = parseInt(KYT.SERVER_PORT, 10);
  const uri = `http://localhost:${port}/graphql`;
  const headers = {};
  if (req.cookies.draftAuthToken) {
    headers.Authorization = `Bearer ${req.cookies.draftAuthToken}`;
  }

  res.locals.client = apolloClient(uri, headers, { ssrMode: true });

  next();
};
