# Build
FROM node:alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./src .

# Run
FROM node:alpine
RUN addgroup -S dps-tp2 && adduser -S dps-tp2 -G dps-tp2
COPY --from=0 /app /app
RUN chown -R dps-tp2:dps-tp2 /app
WORKDIR /app
CMD ["node", "--no-warnings", "index.ts"]