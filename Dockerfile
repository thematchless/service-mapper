FROM node:14-alpine as builder

#Setting the working directory as /app
WORKDIR /app

#Copying package.json to Docker Image
COPY package.json /app
COPY package-lock.json /app

RUN npm ci --silent
RUN npm install react-scripts@4.0.3 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
