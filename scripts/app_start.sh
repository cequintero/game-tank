#!/bin/bash
cd /home/ec2-user/tanks_game
echo Server started on `date`
pm2 start ./server/main.js