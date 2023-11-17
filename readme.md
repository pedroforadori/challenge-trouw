Pojeto criado com Expo, React Native, tailwindcss

## Iniciando

Após clonar o projeto, instale as dependencias do projeto.

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Após isso, execute o server de desenvolvimento:

```bash
npx expo start
```

Após a execuçao, com o aplicativo do expo go instalado em seu celular, faça a leitura do QR Code. Caso queira, poderá rodar direto do emulador instalado em sua propria maquina.

Voce tambem podera testar baixando o .apk

## Estrutura do projeto(folder):
- api: defindo com axios a url padrao do projeto para acessar o backend
- components: definido aqui components reutilizaveis, e trechos do app que pode ser extraido para diminuir as linhas de codigo de uma screen e/ou componente.
- hooks: definicoes de hooks customizados.
- screens: cada tela do app
- type: definicoes de tipos do typescript
