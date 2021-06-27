const path = require('path');
const express = require('express');
const app = express();

app.use(require("cors")());
app.use(express.json());

app.get('/', (req, res, next) =>{
    res.json({message: "Tudo ok!"});
})

const upload = require('multer')();
app.post('/send', upload.single('anexo'),(req, res, next) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    const anexo = req.file;
    res.json({
        nome,
        email,
        mensagem,
        anexo,
    });
});

app.listen(3000, () => {
    console.log('server start');
})