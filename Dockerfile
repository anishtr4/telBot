FROM node:16
WORKDIR /app
COPY package.json /app
COPY . /app
CMD node index.js
EXPOSE 8084