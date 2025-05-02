@echo off
echo Instalando Node.js...
powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v18.17.0/node-v18.17.0-x64.msi' -OutFile '%TEMP%\nodejs.msi'"
start /wait msiexec /i "%TEMP%\nodejs.msi" /quiet /norestart
del "%TEMP%\nodejs.msi"

echo Configurando...
cd aplicacao
npm install

echo Executando o script...
node ajustar_volume %*