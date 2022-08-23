FROM node:16.17.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

RUN apk add --no-cache --upgrade bash

CMD [ "npm", "run", "start" ]