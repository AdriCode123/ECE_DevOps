FROM node:12

WORKDIR /usr/src/app

COPY user-api/package*.json ./

RUN npm ci

COPY user-api .

EXPOSE 3000

CMD [ "npm", "start" ]
