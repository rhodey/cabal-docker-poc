FROM node:10.16.0-alpine

MAINTAINER rhodey@anhonestefort.org

RUN mkdir -p /root/poc
WORKDIR /root/poc

COPY package.json package.json
RUN npm install

COPY index.js index.js

ENTRYPOINT ["node", "index.js"]
