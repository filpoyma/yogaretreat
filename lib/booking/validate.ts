import type { IBookingPayload } from "@/types/retreat";

const MAX_NAME = 120;
const MAX_CONTACT = 200;
const MAX_MESSAGE = 4000;

export function parseBookingBody(
  body: unknown,
): { ok: true; data: IBookingPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Некорректные данные формы" };
  }

  const record = body as Record<string, unknown>;
  const name = trimString(record.name);
  const contact = trimString(record.contact);
  const experience = trimString(record.experience);
  const message = trimString(record.message);

  if (!name || name.length > MAX_NAME) {
    return { ok: false, error: "Укажите имя" };
  }
  if (!contact || contact.length > MAX_CONTACT) {
    return { ok: false, error: "Укажите телефон или мессенджер" };
  }
  if (message.length > MAX_MESSAGE) {
    return { ok: false, error: "Сообщение слишком длинное" };
  }

  return {
    ok: true,
    data: { name, contact, experience, message },
  };
}

function trimString(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
}

export function formatBookingPlainText(payload: IBookingPayload): string {
  const lines = [
    "Новая заявка на ретрит",
    "",
    `Имя: ${payload.name}`,
    `Контакт: ${payload.contact}`,
    `Опыт в йоге: ${payload.experience || "—"}`,
    "",
    "Пожелания / вопросы:",
    payload.message || "—",
  ];
  return lines.join("\n");
}
