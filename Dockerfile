FROM node:alpine

RUN addgroup -S dps-tp2 && adduser -S dps-tp2 -G dps-tp2

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY ./src .

RUN chown -R dps-tp2:dps-tp2 /app

USER dps-tp2

EXPOSE 8000
CMD ["node", "index.ts"]