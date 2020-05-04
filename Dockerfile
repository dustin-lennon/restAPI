FROM node:14.1.0-alpine

# Create application directory
WORKDIR /usr/src/app

# Install the application dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# Bundle the application source
COPY ./src .

EXPOSE 443
CMD [ "node", "app.js"]