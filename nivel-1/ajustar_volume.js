#!/usr/bin/env node

const axios = require('axios');

const args = process.argv.slice(2);
const placaIndex = args.indexOf('--placa');
const volumeIndex = args.indexOf('--volume');

if (placaIndex === -1 || volumeIndex === -1) {
  console.error('Uso: ./ajustar_volume --placa ABC1234 --volume 50');
  process.exit(1);
}

const placa = args[placaIndex + 1];
const volume = parseInt(args[volumeIndex + 1], 10);

axios.post('http://localhost:3000/api/dispositivos/configurar', {
  placa,
  volume_alerta: volume
})
.then(() => console.log('Volume ajustado com sucesso'))
.catch(err => console.error('Erro:', err.message));
