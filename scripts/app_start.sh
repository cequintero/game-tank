#!/bin/bash
cd /home/ec2-user/tanks_game
echo Server started on `date`
pm2 stop main
pm2 delete main
pm2 start ./server/main.js
pm2 startup
pm2 save