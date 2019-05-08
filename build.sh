#!/bin/bash
rm -rf ./client/build
rm -rf ./api/public/
cd client
npm install
npm run build
cd ..
cp -r ./client/build/ ./api/public
echo "*" > ./api/public/.gitignore
echo "Done build & copy!"