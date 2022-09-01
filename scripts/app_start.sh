#!/bin/bash
cd /home/ec2-user/tanks_game
npm start
pm2 startup
pm2 save
pm2 restart all