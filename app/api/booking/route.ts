import { NextResponse } from "next/server";
import { sendBookingEmail, isBookingEmailConfigured } from "@/lib/booking/mail";
import { sendBookingTelegram, isBookingTelegramConfigured } from "@/lib/booking/telegram";
import {
  bookingErrorResponse,
  parseBookingBody,
} from "@/lib/booking/validate";

export async function POST(request: Request) {
  if (!isBookingEmailConfigured() && !isBookingTelegramConfigured()) {
    const { code, error } = bookingErrorResponse("NOT_CONFIGURED");
    return NextResponse.json({ code, error }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    const { code, error } = bookingErrorResponse("INVALID_JSON");
    return NextResponse.json({ code, error }, { status: 400 });
  }

  const parsed = parseBookingBody(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { code: parsed.code, error: parsed.error },
      { status: 400 },
    );
  }

  const wantEmail = isBookingEmailConfigured();
  const wantTelegram = isBookingTelegramConfigured();
  let emailSent = !wantEmail;
  let telegramSent = !wantTelegram;

  if (wantEmail) {
    try {
      await sendBookingEmail(parsed.data);
      emailSent = true;
    } catch (error) {
      console.error("[booking] email failed", error);
      emailSent = false;
    }
  }

  if (wantTelegram) {
    try {
      await sendBookingTelegram(parsed.data);
      telegramSent = true;
    } catch (error) {
      console.error("[booking] telegram failed", error);
      telegramSent = false;
    }
  }

  if (!emailSent || !telegramSent) {
    const { code, error } = bookingErrorResponse("DELIVERY_FAILED");
    return NextResponse.json({ code, error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
