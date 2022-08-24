FROM node:16.17.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

ENTRYPOINT [ "dockerize", "-wait", "tcp://database:3306", "-timeout", "30s", "npm", "run", "start" ]