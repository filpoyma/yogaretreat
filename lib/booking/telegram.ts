import type { IBookingPayload } from "@/types/retreat";
import { formatBookingPlainText } from "@/lib/booking/validate";

function getTelegramConfig() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return null;
  }
  return { token, chatId };
}

export function isBookingTelegramConfigured(): boolean {
  return getTelegramConfig() !== null;
}

export async function sendBookingTelegram(payload: IBookingPayload): Promise<void> {
  const config = getTelegramConfig();
  if (!config) {
    throw new Error("Telegram не настроен");
  }

  const response = await fetch(
    `https://api.telegram.org/bot${config.token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: formatBookingPlainText(payload),
      }),
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Telegram API: ${response.status} ${detail}`);
  }
}
