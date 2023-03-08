FROM node:19.5-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

# COPY pages ./pages
COPY . ./
# COPY components ./components
# COPY styles ./styles
# COPY public ./public
# COPY backend ./backend

CMD [ "yarn", "dev" ]
