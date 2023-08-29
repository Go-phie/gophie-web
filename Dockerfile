FROM node:14-alpine as builder

ENV BUILD_PATH=/build
WORKDIR /web 
COPY package.json package-lock.json ./

RUN yarn

ARG REACT_APP_OCENA_PASSWORD
ARG REACT_APP_OCENA_USERNAME
ENV REACT_APP_OCENA_USERNAME=$REACT_APP_OCENA_USERNAME
ENV REACT_APP_OCENA_PASSWORD=$REACT_APP_OCENA_PASSWORD

COPY . .
RUN yarn build 

FROM node:14-alpine as runner
ENV NODE_ENV=production
WORKDIR /web
COPY package.json package-lock.json ./
RUN yarn
COPY . .
COPY --from=builder /build /web/build
EXPOSE 3000

FROM gcr.io/distroless/nodejs14-debian11
WORKDIR /web
COPY --from=runner /web /web
CMD ["server.js"]
