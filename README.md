# emailMicroservice
email microservice using nodeJs and nodemailer

# npm installs

1. npm install express
1. npm install nodemailer
1. npm install body-parser

# how to:

create an etheral account at https://ethereal.email/
replace you username/password values inside index.js

```javascript
let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: '<email>', // YOUR USER
        pass: '<password>' // TOUR PASSWORD
      },
    });
```

npm run index.js

send an http POST request to http://localhost:3000/ with the following sintax:

```JSON
{
  "email": "1stemail@gmail,com, 2ndemail@hotmail.com",
  "cc": "1stcc@gmail,com, 2ndcc@hotmail.com",
  "bcc": "1stbcc@gmail,com, 2ndbcc@hotmail.com"
}
```
you can add as many comma separated values as you want

# modify the message:
To modify the outgoing message, you can change the values inside 'message'

```javascript
const message = {
      from: '"Equipo de TiendaLibre" <info@tiendalibre.com>', // sender address
      to: `${email}`, //list of receivers
      cc: `${cc}`,  //list of ccs
      bcc: `${bcc}`, // list of bccs
      subject: "Prueba", // Subject line
      text: "Mensaje del equipo de Tienda Libre", // plain text body
      html: "<b>Mensaje del equipo de Tienda Libre</b>" // html body
    }
```
