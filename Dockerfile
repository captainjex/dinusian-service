FROM node:carbon-alpine

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Install dependencies
COPY package*.json ./
# For production
RUN npm install --production

COPY . .

# Expose running port
EXPOSE 3000

# Run the project
CMD ["npm", "start"]
