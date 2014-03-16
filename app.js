
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var mailer = require("./app/services/mailer")
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

// Send Mail
var mail = {
	to: "", //insert your mail
	subject: "Test nodemailer",
	text: "Hi, I'm using nodemailler with Gmail"
}

mailer.sendMail(mail,function () {
	// callback
});

//server start
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
