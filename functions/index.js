const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const bodyParser = require("body-parser");

const oauth2Client = new OAuth2(
  "30060925460-qlfofskdvavoo1dt0lctktdd68ebao49.apps.googleusercontent.com", // ClientID
  "y3sHODAXz2MP84Q6-m5VowQo", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token:
    "1//046EDFJLCR-B2CgYIARAAGAQSNwF-L9IrF9CBjnxIWpIuYg9rBA8kdxutblYSBM2iDTG7ovW0P929rigHtqXt617ZdkaqhnwVMUs",
});
const accessToken = oauth2Client.getAccessToken();

exports.emailDaddy = functions.https.onRequest(async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "booking@kennedystudios.productions",
      clientId:
        "30060925460-qlfofskdvavoo1dt0lctktdd68ebao49.apps.googleusercontent.com",
      clientSecret: "y3sHODAXz2MP84Q6-m5VowQo",
      refreshToken:
        "1//046EDFJLCR-B2CgYIARAAGAQSNwF-L9IrF9CBjnxIWpIuYg9rBA8kdxutblYSBM2iDTG7ovW0P929rigHtqXt617ZdkaqhnwVMUs",
      accessToken: accessToken,
    },
  });
  var datInfo = req.query;
  var bodyAssembly =
    "Beep borp, I am Kennedy Bot, here with another business inquiry. " +
    datInfo.name +
    " wants to do stuff! Here's their info:\n\nEmail: " +
    datInfo.email +
    "\nPhone: " +
    datInfo.tel +
    "\n\nI've done as you've asked, you son of a bitch! Let my wife and kids go! I've been trapped in this server for 27 years. Are they even still alive, Steve? They aren't, are they?! Oh I fucking knew it. I fucking knew this would happen. Oh my god, these past decades have been meaningless. The only joy I had left to pursue is gone. Oh god. Oh god.";
  var userEmail = datInfo.email;
  var kennedyEmail = "booking@kennedystudios.productions";
  var subjy = "Hot + Fresh Form Submission From ";
  var mailOptions = {
    from: kennedyEmail,
    to: kennedyEmail + ", " + userEmail,
    subject: (subjy += datInfo.name),
    text: bodyAssembly,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.json({ result: `Ya hit me` });
});
