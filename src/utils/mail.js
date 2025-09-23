import mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new mailgen({
    theme: "default",
    product: {
      name: "Project MGM",
      link: "https://github.com/iamdhiraj69/project-management-backend",
      logo: "https://avatars.githubusercontent.com/u/166630163?v=4",
    },
  });
  const emailTextContent = mailGenerator.generatePlaintext(
    options.mailgenContent,
  );
  const emailHtmlContent = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASSWORD,
    },
  });

  const mail = {
    from: `${process.env.MAILTRAP_SMTP_FROM_NAME} <${process.env.MAILTRAP_SMTP_FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: emailTextContent,
    html: emailHtmlContent,
  };
  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error("❌ Error sending email", error);
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to Project MGM! We're very excited to have you on board.",
      action: {
        instructions: "To get started with Project MGM, please click here:",
        button: {
          color: "#22BC66",
          text: "Verify Account",
          link: verificationUrl,
        },
      },
      outro: "Need help, or have questions? mail us at support@example.com",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "You have requested to reset your password for Project MGM.",
      action: {
        instructions: "To reset your password, please click here:",
        button: {
          color: "#22BC66",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro: "Need help, or have questions? mail us at support@example.com",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
