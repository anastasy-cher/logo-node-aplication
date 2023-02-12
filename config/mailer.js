const nodemailer = require("nodemailer");

async function conection(email, message) {
  
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS, // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
        from: `${email} <chernykhanastasia96@gmail.com>`, // sender address
        to: "chernykhanastasia96@gmail.com", // list of receivers
        subject: "Incidencia de " + email, // Subject line
        text: message, // plain text body
      });
    
      console.log("Message sent: %s", info.messageId);
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = {conection}
// conection.verify().then( () => {
//     console.log('coneccion establecida')
// })

