const sgmail = require('@sendgrid/mail')

const sendgrindApiKey = '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'

sgmail.setApiKey(sendgrindApiKey);

const sendWelcomeMail = (email, name) =>{
  sgmail.send({
    to: email,
    from: "drjoseher@hotmail.com", 
    subject: "Thanks for joining in!",
    text: `Welcome to the app ${name}, let me know how you get aloong with the app`
   })
}

const sendCancelationMail = (email, name) =>{
  sgmail.send({
    to: email,
    from: "drjoseher@hotmail.com", 
    subject: "Sorry to see you go!",
    text: `Good bye ${name}, I hope to see you back sometime soon.`
   })
}

module.exports ={ sendWelcomeMail, sendCancelationMail}