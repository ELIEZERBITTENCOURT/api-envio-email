const mailer = require("nodemailer");

module.exports = (email, nome, mensagem, anexo) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587,
        secure: false, //SSL/TLS
        auth: {
            user: 'seuemail@exemplo.com.br',
            pass: 'XXXX'
        }
    })

    const mail = {
        from: "Seu nome <seuemail@exemplo.com.br>",
        to: email,
        subject: `${nome} te enviou uma mensagem`,
        text: mensagem,
    }

    if(anexo){
        console.log(anexo);
        mail.attachments = [];
        mail.attachments.push({
            filename: anexo.originalname,
            content: anexo.buffer
        })
    }
    return new Promise((resolve, reject) =>{
        smtpTransport.sendMail(mail)
        .then(response =>{
            smtpTransport.close();
            return resolve(response);
        })
        .catch(error => {
            smtpTransport.close();
            return reject(error);
        });
    })
}