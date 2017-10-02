FROM node:7.7.2-alpine

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn

# Add your source files
COPY .babelrc .babelrc
COPY src src
RUN npm run build
CMD ["npm", "run", "start"]
