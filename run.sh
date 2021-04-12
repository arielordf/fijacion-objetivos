#!/bin/bash

docker stop obj-nginx
docker rm obj-nginx
docker run --name obj-nginx -p 8080:80 -v $PWD:/usr/share/nginx/html:ro -d nginx