Para criar um novo projeto node e configurar um novo projeto

verificar se o node esta na versao de preferencia LTS
node -v
npm -v

criar a pasta do projeto 
mkdir nomeprojeto

Iniciar com o comando para criar o package.json com a configuracao inicial do node, onde contem as dependencias do projeto
npm init -y

Instalar o typescript para usar o typescript e types/node para utilizar o typescript dentro do node
npm install typescript @types/node -D

Para criar o tsconfig.json
npx tsc --init 

procurar o repositorio microsoft/typescript node target mapping para atualizar o tsconfig.json com as configuracoes sugeridos pela microsoft de acordo com a versao do node https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping procurar a versao referente a instalada do node e substituir os parametros em tsconfig.json

Instalar pacote tsx para converter o codigo de typescript para javascript
npm install tsx -D

configurar no package.json a tag scripts substituindo para dev e o comando "tsx watch src/http/server.ts" para que o node consiga interpretar o codigo typescript

para verificar se o servidor está rodando execute o comando "npm run dev"


https://www.youtube.com/watch?v=hHM-hr9q4mo
#Fastify
Para instalar o pacote fastfy execute o comando abaixo que adicionara o pacote ao projeto
npm install fastify

