FROM node:16
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install 
CMD node server.js
EXPOSE 8084