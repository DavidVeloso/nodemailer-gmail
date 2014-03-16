var mailer = require("nodemailer")
  , config = require('../../config/config')

var smtp = mailer.createTransport("SMTP",{
  service: "Gmail",
  auth:{
    user: config.mail.user,
    pass: config.mail.pass
  }
});

exports.sendMail = function (mail, callback) {
  callback(
    smtp.sendMail({
      from: config.mail.user, 
      to: mail.to, 
      subject: mail.subject, 
      text: mail.text 
    },function(error, response){
        if(error){throw error;}
        console.log("Mail sent: " + response.message);
        //smtp.close(); // shut down the connection.
    }));
}



