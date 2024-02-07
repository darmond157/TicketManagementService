#!/bin/bash
cd backend
docker build -t backend-image .
docker run -d --name backend-container backend-image

cd ../frontend
docker build -t frontend-image .
docker run -d --name frontend-container frontend-image