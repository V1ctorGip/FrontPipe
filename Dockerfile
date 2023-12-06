FROM node:14

WORKDIR /app

COPY app.js index.html ./

CMD [ "node", "app.js" ]
