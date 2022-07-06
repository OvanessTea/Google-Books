FROM node:16.15.1-alpine
WORKDIR /google_books
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]