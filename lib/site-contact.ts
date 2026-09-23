export interface IOrganizerTelegramContact {
  readonly href: string;
  readonly label: string;
}

function normalizeTelegramUsername(raw: string): string {
  return raw
    .trim()
    .replace(/^@/, "")
    .replace(/^https?:\/\/(www\.)?t\.me\//i, "")
    .replace(/\/$/, "");
}

export function getOrganizerTelegramContact(): IOrganizerTelegramContact | null {
  const raw = process.env.NEXT_PUBLIC_ORGANIZER_TELEGRAM;
  if (!raw) return null;
  const username = normalizeTelegramUsername(raw);
  if (!username) return null;
  return {
    href: `https://t.me/${username}`,
    label: `@${username}`,
  };
}
