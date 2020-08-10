const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

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

  var mailOptions = {
    from: "larocque.christopher@gmail.com",
    to: "larocque.christopher@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
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
