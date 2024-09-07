FROM node:20-alpine
WORKDIR /portfolio/
COPY public/ /portfolio/public
COPY src/ /portfolio/src
COPY package.json /portfolio/

RUN npm install --production
RUN npm run build

EXPOSE 8080

CMD npx http-server build/ -p 8080 & tail -f /dev/null
