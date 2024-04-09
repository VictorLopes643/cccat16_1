#!/bin/bash

#preparar algum env
if [ ! -f "./.env" ]; then
    cp ./.env.example ./.env
fi

#instalar dependencias
chmod -R 777 .docker/*
npm install -g typescript ts-node
npm install -g nodemon
npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
npm install


tail -f /dev/null
