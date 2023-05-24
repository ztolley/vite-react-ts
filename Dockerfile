FROM node:18 as build
WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

FROM nginxinc/nginx-unprivileged
COPY --from=build /app/dist /usr/share/nginx/html
