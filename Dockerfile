FROM node:10.16.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn global add serve && yarn && yarn run build && rm -rf node_modules

EXPOSE 3000
CMD ["serve", "-s", "build"]
