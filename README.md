# api-envio-email
Aplicação simples para backend utilizando NodeJS, responsável pelo recebimento das informações da interface e envio do email em si, usando Nodemailer.

## Observação
API backend recebe os dados de um formulário. A construção é de um arquivo server.js usa ExpressJS como web framework criando apenas uma rota GET simples e um POST que ecoa o request recebido. Note que usei o CORS para permitir que essa web API seja chamada pelo frontend mais tarde.

### Testando
Se você colocar este arquivo para rodar ele vai ficar aguardando um POST em http://localhost:3000/send. Você poderá testar no Postman.

## nodemail.js
Módulo de envio de e-mails, este módulo exporta somente uma única função de envio que recebe os dados do destinatário, possui as configurações SMTP no seu interior e envia o email, retornando uma Promise para ser tratada externamente. 
