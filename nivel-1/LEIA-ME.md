# Sistema de Controle de Volume

Sistema simples para controlar volume de veículos.

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

1. Inicie o servidor:
   ```bash
   npm run start
   ```

2. Permita a execucao do programa:
   ```bash
   chmod +x ./ajustar_volume.js
   ```

3. Execute o programa:
   ```bash
   ./ajustar_volume.js --placa ABC1234 --volume 50
   ```


## Exemplo de uso

```bash
./ajustar_volume --placa ABC1234 --volume 50
```

## Tecnologias

- Node.js - Execucao do programa
- Express.js - Servidor
- Axios - Requisicoes HTTP
