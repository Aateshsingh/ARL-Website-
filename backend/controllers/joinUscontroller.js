const nodemailer = require('nodemailer');
const Join = require('../models/joinUsModel'); // Ensure your model is set up properly

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.joinReq = async (req, res) => {
  const { name, email, phone } = req.body; // We don't include 'message' here

  // Validate inputs
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Save the data to the database
  try {
    const newJoinRequest = new Join({
      name,
      email,
      phone,
    });

    await newJoinRequest.save(); // Save the request to the database

    // Set up the email content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Join Request from ${name} (${email})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
          <h2 style="color: #2c3e50;">New Join Request</h2>
          <p style="font-size: 16px; color: #34495e;">You have received a new join request from:</p>
          <ul style="font-size: 16px; color: #34495e; padding-left: 20px;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
          </ul>
          <hr style="border: 1px solid #dcdcdc;">
          <footer style="margin-top: 30px; font-size: 14px; color: #95a5a6;">
            <p style="text-align: center;">This message was sent to you via your website's Join Us form.</p>
          </footer>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Join request submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
};
