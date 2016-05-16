/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var user = sails.config.local.email.user;
var pass = sails.config.local.email.pass;
var host = sails.config.local.email.host;
var transportString = 'smtps://' + user + '%40' + host + ':' + pass + '@smtp.' + host;
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(transportString);

var mailOptions = function(name, from, subject, text, html) {
  var options = {};
  options['from'] = '"' + name + '" <' + from + '>';
  options['to'] = sails.config.local.email.to;
  options['subject'] = subject;
  options['text'] = text;
  options['html'] = html;
  return options;
}

var plainText = function(name, email, msg) {
  var txt = "Contact page submission from: '" + name + "' <" + email + ">" + " ";
  txt += msg;
  return txt;
}
var htmlText = function(name, email, msg) {
  var txt = "Contact page submission from: '" + name + "' <" + email + ">" + "<br/><br/>";
  txt += msg;
  return txt;
}

module.exports = {

  send: function (req, res) {
    if(sails.config.local.email.active === false) {
        res.status(500);
        res.send('Contact Page Disabled. No Email Sent.');
        return;
    }
    var name = req.param('name');
    var email = req.param('email');
    var subject = "Contact Page Submission From: " + name;
    var text = req.param('message');
    
    var from = user + "@" + host;
    transporter.sendMail(mailOptions(name,from,subject,plainText(name, email, text),htmlText(name, email, text)), function(error, info) {
      if(error) {
        sails.log.error('Nodemailer :: Send Fail: ' + error + ' - ' + email); 
        res.status(500);
        res.send('Message failed to send, please try again.');
      }
      else {
        sails.log.info('Nodemailer :: ' + info.response + ' - ' + email);
        res.status(200);
        res.send('Message Sent.');
      }
      return;
    });
  },

  /**
   * `ContactController.Summary()`
   */
  Summary: function (req, res) {
    return res.view('contact');
  }
};
