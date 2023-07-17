# FROM keymetrics/pm2:latest-alpine

# # Bundle APP files
# COPY src src/  
# COPY package.json .
# COPY pm2.json .

# # Install app dependencies
# ENV NPM_CONFIG_LOGLEVEL warn
# RUN npm install --production

# # Show current folder structure in logs
# RUN ls -al -R

# CMD [ "pm2-runtime", "start", "ecosystem.config.cjs" ]

FROM  node:18.16.0-alpine

# Create app directory
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./
COPY . /app
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
RUN npm run build

RUN npm install pm2 -g
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
