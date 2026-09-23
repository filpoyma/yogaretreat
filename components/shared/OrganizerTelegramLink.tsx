import { getOrganizerTelegramContact } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

interface IOrganizerTelegramLinkProps {
  readonly className?: string;
}

export function OrganizerTelegramLink({ className }: IOrganizerTelegramLinkProps) {
  const contact = getOrganizerTelegramContact();
  if (!contact) {
    return null;
  }

  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="organizer-telegram-link"
      className={cn("transition-colors duration-300", className)}
    >
      {contact.label}
    </a>
  );
}
