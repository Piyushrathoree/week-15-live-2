FROM node:22-alpine

WORKDIR /app

<<<<<<< HEAD
COPY . .

RUN npm install
RUN npx prisma generate
=======
COPY package* .

RUN npm install

COPY . .

>>>>>>> a823df1 (Init)
RUN npm run build

EXPOSE 3000

<<<<<<< HEAD
CMD ["node", "dist/index.js"]
=======
CMD ["node", "dist/index.js"]
>>>>>>> a823df1 (Init)
