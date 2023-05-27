FROM node:14-alpine3.16

ENV PORT=3001

WORKDIR /app

COPY . /app

RUN npm i

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]