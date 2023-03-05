FROM node:14-alpine as builder
WORKDIR /gophie-web 
COPY . .
RUN npm install --legacy-peer-deps 
RUN npm install -g add serve
RUN apk add --no-cache make
RUN make production
#EXPOSE 3000

FROM nginx:1.21.0-alpine as production
COPY --from=builder /gophie-web/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80 
CMD [ "nginx","-g","daemon off;" ]
#CMD ["serve","-s","build"]