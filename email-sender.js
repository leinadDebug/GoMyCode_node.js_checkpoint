const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'your-email-service-provider',
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password',
  },
});

const mailOptions = {
  from: 'your-email@example.com',
  to: 'recipient@example.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
