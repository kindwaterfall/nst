FROM node:14.16.0-alpine
WORKDIR /app
COPY . ./
RUN npm install && npm run build
CMD ["npm", "run", "start"]