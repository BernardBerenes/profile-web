FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

COPY src/assets dist/src/assets

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]