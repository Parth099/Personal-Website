FROM node:18.18.2

# set up workfolder
WORKDIR /app

# copy over package information
COPY package.json .
COPY package-lock.json .

# install packages
RUN npm install

# copy source code from machine to image
# (make it ignore things via .dockerignore)
COPY . . 

# run start server command
CMD ["npm", "run", "dev"]