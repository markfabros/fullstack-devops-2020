FROM node:alpine
COPY /dist /API/dist
COPY ./package.json /API
WORKDIR /API
RUN npm install
WORKDIR /API/dist/HextoRGB
EXPOSE 3000
CMD ["node", "Httpserver.js"]