FROM node:14-alpine
WORKDIR /gophie-web 
COPY . .
EXPOSE 3000
RUN yarn
RUN yarn build 
RUN yarn global add pm2 
ENV NODE_ENV=production
CMD ["pm2-runtime", "start","server.js","-n","gophie-web"]
