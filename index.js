const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});


exports.sendEmailNotification = functions.firestore
  .document('contacts/{docId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    
    const mailOptions = {
        from: 'Your Email <bigmoneygelo10000@gmail.com>', // Use a valid sender email address
        to: 'angelobrown1000@gmail.com',
        subject: `New Message from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        // Optionally, you can use `html` to format your email with HTML
    };
    
    return mailTransport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      return console.log('Email sent: ' + info.response);
    });
  });