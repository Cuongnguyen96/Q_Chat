import nodeMailer from "nodemailer";

let adminEmail = process.env.MAIL_USER;
let adminPassWord = process.env.MAIL_PASSWORD;
let mailHost = process.env.MAIL_HOST;
let mailPort = process.env.MAIL_PORT;

let sendMail = (to, subject, htmContent)  =>{
    let transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false, // use SSL - TLS
        auth:{
            user: adminEmail,
            pass: adminPassWord
        }
    });

    let options = {
        from: adminEmail,
        to: to,
        subject: subject,
        html: htmContent
    };

    return transporter.sendMail(options);    // This default return promise

}

module.exports = sendMail;