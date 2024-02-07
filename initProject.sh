#!/bin/bash
cd Nodejs
docker build -t backend-image .
docker run -d --name backend-container backend-image

cd ../Vue
docker build -t frontend-image .
docker run -d --name frontend-container frontend-image