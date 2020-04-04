const sgmail = require('@sendgrid/mail')

const sendgrindApiKey = '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'
sgmail.setApiKey(sendgrindApiKey);

const sendMailWelcome = (email, name) =>{
  sgmail.send({
    to: email,
    from: "drjoseher@hotmail.com", 
    subject: "Thanks for joining in!",
    text: `Welcome to the app`
   })
}
