// Import access to database tables
const transporter = require("../services/mail");

// The B of BREAD - Browse (Read All) operation
const send = async (req, res, next) => {
  try {
    await transporter.sendMail({
      from: req.body.email, // sender address
      to: "julien.y.richard@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.message, // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    res.json({ msg: "Votre email a bien été envoyé" });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  send,
};
