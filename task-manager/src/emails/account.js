const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SEND_GRID_API_KEY);

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