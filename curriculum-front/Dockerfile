FROM node:lts-alpine
WORKDIR /usr/src/app
COPY curriculum-front/package*.json ./
RUN ls -l
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install
COPY curriculum-front ./
RUN ls -l
RUN npm run build
COPY curriculum-front/nodeServer.js dist/nodeServer.js
WORKDIR /usr/src/app/dist
EXPOSE 8080
CMD [ "node", "nodeServer.js" ]
