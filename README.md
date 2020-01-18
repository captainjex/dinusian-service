# Dinusian service [![Build Status](https://travis-ci.com/gaspadat/dinusian-service.svg?branch=master)](https://travis-ci.com/gaspadat/dinusian-service)

> Pengisi kanal https://t.me/dinusian

---

# Development Todo
- [x] scrapper pengumuman
- [x] bot telegram broadcast channel
- [x] cronjob scrap pengumuman & broadcast channel
- [ ] halaman web baca pengumuman (telegram instant page)


# Requirement
- node v8
- mongo 3.6
- nodemon untuk development `npm i -g nodemon` (opsional)
- pm2 untuk production `npm i -g pm2` (bisa pakai process manajer lain terserah)

# How to run
- clone repo ini
- `npm install`
- `cp .env.example .env`
- edit `.env` sesuaikan setting environment
- run `npm start`

# Deploy
- Jangan lupa timezone. Karena ini menggukanan crob job
  - Cek time now `date`
  - Cek timezone `more /etc/timezone`
  - Set timezone. Contoh Asia/Jakarta `sudo timedatectl set-timezone Asia/Jakarta`
- Run for prod : `pm2 start ./bin/www --name dinusian-service` (if you want to use pm2)

# Pake docker
Buat dulu file env. contoh di `.env.example`.
misal `nano /path/to/env/dinusian-service.env`

Build image dari repo ini

`docker build https://github.com/gaspadat/dinusian-service.git -t gaspadat/dinusian-service`

Jalankan, file env pake volume

`docker run --name dinusian-service --link mongodb:mongodb -v /path/to/env/dinusian-service.env:/app/.env -d gaspadat/dinusian-service`
