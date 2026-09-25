import type { IBookingPayload } from "@/types/retreat";
import type { TBookingErrorCode } from "@/lib/i18n/dictionaries/ru";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/locales";

const MAX_NAME = 120;
const MAX_CONTACT = 200;
const MAX_MESSAGE = 4000;

const ERROR_MESSAGES_RU: Record<TBookingErrorCode, string> = {
  INVALID_BODY: "Некорректные данные формы",
  NAME_REQUIRED: "Укажите имя",
  CONTACT_REQUIRED: "Укажите телефон или мессенджер",
  MESSAGE_TOO_LONG: "Сообщение слишком длинное",
  NOT_CONFIGURED: "Отправка заявок не настроена на сервере",
  INVALID_JSON: "Некорректный JSON",
  DELIVERY_FAILED:
    "Не удалось отправить заявку. Попробуйте позже или напишите нам напрямую.",
  SUBMIT_FAILED: "Не удалось отправить заявку",
};

export type TParseBookingResult =
  | { ok: true; data: IBookingPayload }
  | { ok: false; code: TBookingErrorCode; error: string };

export function parseBookingBody(body: unknown): TParseBookingResult {
  if (!body || typeof body !== "object") {
    return fail("INVALID_BODY");
  }

  const record = body as Record<string, unknown>;
  const name = trimString(record.name);
  const contact = trimString(record.contact);
  const experience = trimString(record.experience);
  const message = trimString(record.message);
  const localeRaw = trimString(record.locale);
  const locale = isLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;

  if (!name || name.length > MAX_NAME) {
    return fail("NAME_REQUIRED");
  }
  if (!contact || contact.length > MAX_CONTACT) {
    return fail("CONTACT_REQUIRED");
  }
  if (message.length > MAX_MESSAGE) {
    return fail("MESSAGE_TOO_LONG");
  }

  return {
    ok: true,
    data: { name, contact, experience, message, locale },
  };
}

function fail(code: TBookingErrorCode): TParseBookingResult {
  return { ok: false, code, error: ERROR_MESSAGES_RU[code] };
}

function trimString(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
}

export function formatBookingPlainText(payload: IBookingPayload): string {
  const localeLine =
    payload.locale === "en" ? "Язык: EN" : "Язык: RU";

  const lines = [
    "Новая заявка на ретрит",
    "",
    localeLine,
    `Имя: ${payload.name}`,
    `Контакт: ${payload.contact}`,
    `Опыт в йоге: ${payload.experience || "—"}`,
    "",
    "Пожелания / вопросы:",
    payload.message || "—",
  ];
  return lines.join("\n");
}

export function bookingErrorResponse(code: TBookingErrorCode): {
  code: TBookingErrorCode;
  error: string;
} {
  return { code, error: ERROR_MESSAGES_RU[code] };
}
