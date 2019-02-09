# Dinusian service by wkwkmbuh

# requirement
- node v8
- mongo 3.6
- nodemon for development `npm i -g nodemon` (optional)
- pm2 for production `npm i -g pm2` (you can use other process manager up to you)

# How to run
- clone this repo
- `npm install`
- `cp .env.example .env`
- edit `.env` sesuaikan setting environment
- run for dev : `npm run dev` or `npm start` if you prefer not use nodemon
- run for prod : `pm2 start ./bin/www --name dinusian-service` (if you want to use pm2)

# Pake docker
buat dulu file env. contoh di `.env.example`.
misal `nano /path/to/env/dinusian-service.env`

build image dari repo ini

`docker build https://github.com/wkwksama/dinusian-service.git -t wkwksama/dinusian-service`

jalankan, file env pake volume

`docker run --name dinusian-service --link mongodb:mongodb -v /path/to/env/dinusian-service.env:/app/.env -d wkwksama/dinusian-service`
