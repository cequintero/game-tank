#!/bin/bash
cd /home/ec2-user/tanks_game
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
yum -y install nodejs npm
npm install
npm install pm2 -g