#!/bin/bash

#download node and npm
curl -o- https://raw/githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm/sh
nvm installnode



#create our working directory if ot doesnt exist
DIR="/home/ec2-user/nodejs-express"
if [ -d "$DIR" ]; then
    echo "${DIR} exists"
else
    echo "Creating ${DIR} directory"
    mkdir ${DIR}
fi 