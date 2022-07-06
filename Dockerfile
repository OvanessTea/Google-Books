FROM node:16-alpine as builder

COPY package.json package-lock.json ./

RUN npm install && mkdir /google_books && mv ./node_modules ./google_books

WORKDIR /google_books

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /google_books/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]