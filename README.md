# Ajustar Volume

Este script ajuda a ajustar o volume dos dispositivos de áudio dos veículos. É super fácil de usar e tem duas formas de funcionar:

## Como Funciona

1. **Via Arquivo CSV**
   - Você pode ajustar vários veículos de uma vez usando um arquivo CSV
   - O arquivo deve ter duas colunas: `placa` e `volume`
   - O script lê o arquivo e ajusta o volume de cada veículo automaticamente

2. **Para um Veículo Específico**
   - Você pode ajustar o volume de um veículo individualmente
   - Basta informar a placa e o volume desejado

## Como usar pelo navegador

Abra o link: http://v3-ajuste-volume.brunoserbai.org/

## Como Rodar localmente no Windows e Linux

### Pré-requisitos

- Ter o **Node.js** instalado:  
  - [Windows](https://nodejs.org/en/download/)

  - [Linux (Debian/Ubuntu)]:
    ```bash
    sudo apt update && sudo apt install nodejs npm
    ```

## Rode o script `ajustar_volume.js`:

### Usando Arquivo CSV
```bash
   node ajustar_volume.js --arquivo seu_arquivo.csv
```

### Para um Veículo Específico
```bash
   node ajustar_volume.js --placa ABC1234 --volume 50
```

## O Que Precisa Saber

- O volume deve ser um número entre 0 e 100
- A placa deve ser um número válido
- O script se conecta com um servidor local na url: https://challenge-v3.brunoserbai.org/api/dispositivos
- Se algo der errado, você verá uma mensagem explicando o problema

## Placa de veiculo

A placa de veiculo deve ser um numero valido, ou seja, deve ter 7 caracteres e ser composta por 3 letras e 4 numeros de acordo com o padrao do Brasil. Fonte:https://pt.wikipedia.org/wiki/Placas_de_identifica%C3%A7%C3%A3o_de_ve%C3%ADculos_no_Brasil

Exemplo padrao antigo: ABC1234
Exemplo Mercosul (novo padrao): ABC1A12

## Exemplo de Arquivo CSV
```
placa,volume
ABC1234,50
DEF5678,75
GHI9101,30
```

## Bibliotecas Usadas

O programa usa algumas bibliotecas importantes:

1. **Axios**
   - Faz requisicoes HTTP para o servidor
   - Faz a comunicação entre o script e o servidor onde os dispositivos estão configurados
   Documentacao:https://www.npmjs.com/package/axios

2. **fs (File System)**
   - É o responsável por ler os arquivos do computador
   - Ajuda o script a ler o arquivo CSV quando você quer ajustar vários veículos de uma vez

3. **csv-parser**
   - Este é o ajudante que transforma o arquivo CSV em informações que o script pode entender
   - Lê cada linha do arquivo e separa a placa e o volume para cada veículo
   Documentacao:https://www.npmjs.com/package/csv-parser
   Documentacao adicional:https://www.digitalocean.com/community/tutorials/how-to-read-and-write-csv-files-in-node-js-using-node-csv

4. **Morgan**
   - E um middleware que ajuda a registrar as requisicoes HTTP
   Documentacao:https://www.npmjs.com/package/morgan