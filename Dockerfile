FROM node:16
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 8088
CMD [ "node", "index.js" ]