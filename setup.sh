#!/bin/bash

if ! command -v node &> /dev/null; then
    echo "Instalando Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "Configurando..."
cd aplicacao
npm install

node ajustar_volume "$@"