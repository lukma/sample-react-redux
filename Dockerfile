FROM node:latest

COPY . .

RUN npm install

RUN npm start

EXPOSE 3000