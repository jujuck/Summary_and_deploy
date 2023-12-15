const nodemailer = require("nodemailer");

const { MAIL_USER, MAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: MAIL_USER, // generated ethereal user
    pass: MAIL_PASSWORD, // generated ethereal password
  },
});

module.exports = transporter;
