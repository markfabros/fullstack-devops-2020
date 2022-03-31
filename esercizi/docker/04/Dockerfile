FROM alpine
RUN apk update && apk add nodejs
RUN mkdir app
COPY index.js /app
CMD ["node", "app/index.js"]
