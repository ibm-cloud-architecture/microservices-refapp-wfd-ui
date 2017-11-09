FROM node

WORKDIR /WfdFrontEnd

COPY package.json .

RUN npm i

RUN npm i request --save

RUN npm i dotenv --save

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
