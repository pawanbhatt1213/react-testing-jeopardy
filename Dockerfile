FROM node:12.13.0
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
CMD npm start