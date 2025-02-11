const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name} (${email})`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
        <h2 style="color: #2c3e50;">You have a new message!</h2>
        <p style="font-size: 16px; color: #34495e;">You have received a new message from <strong>${name}</strong> (${email}):</p>
        <hr style="border: 1px solid #dcdcdc;">
        <p style="font-size: 16px; color: #34495e; margin-top: 20px;"><strong>Message:</strong></p>
        <p style="font-size: 14px; color: #7f8c8d; background-color: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">${message}</p>
        <footer style="margin-top: 30px; font-size: 14px; color: #95a5a6;">
          <p style="text-align: center;">This message was sent to you via your website contact form.</p>
        </footer>
      </div>
    `,
  };
  

  try {
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
};
