import { NextResponse } from "next/server";
import { sendBookingEmail, isBookingEmailConfigured } from "@/lib/booking/mail";
import { sendBookingTelegram, isBookingTelegramConfigured } from "@/lib/booking/telegram";
import { parseBookingBody } from "@/lib/booking/validate";

export async function POST(request: Request) {
  if (!isBookingEmailConfigured() && !isBookingTelegramConfigured()) {
    return NextResponse.json(
      { error: "Отправка заявок не настроена на сервере" },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 });
  }

  const parsed = parseBookingBody(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
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
    return NextResponse.json(
      {
        error:
          "Не удалось отправить заявку. Попробуйте позже или напишите нам напрямую.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
