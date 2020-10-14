const express = require('express')
const nodemailer = require('nodemailer')
const bodyparser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyparser.urlencoded({extended: false}))

app.use(bodyparser.json())

//GET
app.get("/", (req, res) => {
    res.send("Mensaje de prueba")
})

//POST
app.post("/", async(req, res) => {

    const {email, cc, bcc} = req.body;

    /*
    EJEMPLO:
    {
      "email": "matardo12@gmail.com, agustinf@hotmail.com",
      "cc": "juanjose@yahoo.com, pablosantos@daj.com",
      "bcc": "jorgelopez@yahoo.com"
    }
    */

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: '<user>', // usuario etheral
        pass: '<password>' // generated ethereal password
      },
    });
    
    const message = {
      from: '"Equipo de TiendaLibre" <info@tiendalibre.com>', // sender address
      to: `${email}`,
      cc: `${cc}`,
      bcc: `${bcc}`, // list of receivers
      subject: "Prueba", // Subject line
      text: "Mensaje del equipo de Tienda Libre", // plain text body
      html: "<b>Mensaje del equipo de Tienda Libre</b>" // html body
    }

    // send mail with defined transport object
    let info = await transporter.sendMail(message);

    console.log("Mensaje enviado: %s", info.messageId);   
    
    console.log("Vista previa de URL: %s", nodemailer.getTestMessageUrl(info));  

    res.send("Email enviado")
})


app.listen(port, () => 
    console.log('Mailer listening on port: %s', port))
