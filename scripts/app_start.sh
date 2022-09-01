#!/bin/bash
cd /home/ec2-user/tanks_game
echo Build started on `date`
echo Compiling the Node.js code
npm run build
echo Build completed on `date`