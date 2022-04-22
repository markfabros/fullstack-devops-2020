FROM node:alpine
COPY /dist /API/dist
COPY package.json /API
WORKDIR /API
RUN npm install
WORKDIR /API/dist/CMYK-to-HSL/src/
EXPOSE 3000
CMD ["node","HttpServer.js"]