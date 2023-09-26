FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 5000

CMD [ "npm", "start" ]