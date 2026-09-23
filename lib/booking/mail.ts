import nodemailer from "nodemailer";
import type { IBookingPayload } from "@/types/retreat";
import { formatBookingPlainText } from "@/lib/booking/validate";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.BOOKING_FROM_EMAIL ?? user;
  const to = process.env.BOOKING_NOTIFY_EMAIL;

  if (!host || !user || !pass || !to) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
    from,
    to,
  };
}

export function isBookingEmailConfigured(): boolean {
  return getSmtpConfig() !== null;
}

export async function sendBookingEmail(payload: IBookingPayload): Promise<void> {
  const config = getSmtpConfig();
  if (!config) {
    throw new Error("SMTP не настроен");
  }

  const text = formatBookingPlainText(payload);
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    subject: `Заявка на ретрит: ${payload.name}`,
    text,
    replyTo: payload.contact.includes("@") ? payload.contact : undefined,
  });
}
