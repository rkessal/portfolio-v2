import { transporter } from "@/lib/nodemailer/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mailData = {
    from: process.env.NEXT_PUBLIC_NODEMAILER_USER,
    to: "hello@errka.dev",
    replyTo: req.body.email,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return res.status(400).send(error.message);
    } else {
      return res.status(200).send(info.response);
    }
  });
}
