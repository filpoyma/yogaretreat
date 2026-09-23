"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, MapPin, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { OrganizerTelegramLink } from "@/components/shared/OrganizerTelegramLink";
import { Reveal } from "@/components/shared/Reveal";
import { SectionKicker } from "@/components/shared/SectionKicker";
import { getOrganizerTelegramContact } from "@/lib/site-contact";

const EXPERIENCE = [
  "Новичок — первый ретрит",
  "Занимаюсь периодически",
  "Регулярная практика",
  "Инструктор",
] as const;

export function BookingSection() {
  const organizerTelegram = getOrganizerTelegramContact();
  const [experience, setExperience] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setError(null);

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          contact: formData.get("contact"),
          experience: experience ?? "",
          message: formData.get("message") ?? "",
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Не удалось отправить заявку");
      }

      setSubmitted(true);
      form.reset();
      setExperience(null);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Не удалось отправить заявку",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="booking"
      data-testid="booking-section"
      className="scroll-mt-[65px] bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionKicker index="06" label="Бронирование" />
          <h2 className="mt-6 font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-bark">
            Оставьте заявку —
            <br />
            <span className="italic text-clay">и возвращайтесь к себе</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <Reveal className="flex h-full flex-col lg:col-span-5">
            <div
              data-testid="price-card"
              className="noise relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-bark p-8 text-sand sm:p-10"
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/50">
                  Стоимость участия
                </div>
                <div className="mt-4 flex items-end gap-3">
                  <span className="font-heading text-6xl leading-none sm:text-7xl">
                    180 $
                  </span>
                  <span className="pb-1 text-sm text-sand/60">/ сутки</span>
                </div>
                <div className="mt-2 text-sm italic text-clay-light">
                  all-inclusive: проживание, питание, программа
                </div>
                <div className="mt-8 space-y-5 border-t border-white/15 pt-8">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-clay-light" aria-hidden />
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/50">
                        Даты
                      </div>
                      <div className="mt-0.5 text-sm text-sand">10–16 ноября 2026</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-light" aria-hidden />
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/50">
                        Локация
                      </div>
                      <div className="mt-0.5 text-sm text-sand">
                        Северный Гоа · эко-отель «Папа Джолли»
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-clay-light" aria-hidden />
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/50">
                        Итого
                      </div>
                      <div className="mt-0.5 text-sm text-sand">
                        ≈ 1 080 $ за 7 дней / 6 ночей
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-clay-light" aria-hidden />
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/50">
                        Группа
                      </div>
                      <div className="mt-0.5 text-sm text-sand">
                        Камерный формат · любой уровень
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-auto pt-8 text-xs leading-relaxed text-sand/50">
                  Авиабилеты до Гоа — за свой счёт. После заявки мы свяжемся с вами,
                  ответим на вопросы и забронируем место.
                </p>
                {organizerTelegram ? (
                  <p className="mt-3 text-xs leading-relaxed text-sand/50">
                    Вопросы до заявки —{" "}
                    <OrganizerTelegramLink
                      className="text-clay-light underline-offset-2 hover:underline"
                    />
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={80} className="flex h-full flex-col lg:col-span-7">
            <form
              data-testid="booking-form"
              onSubmit={onSubmit}
              className="flex h-full flex-col rounded-[2rem] border border-border-warm bg-white p-8 sm:p-10"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="booking-name">Ваше имя *</Label>
                  <Input
                    id="booking-name"
                    name="name"
                    required
                    placeholder="Елена Смирнова"
                    data-testid="booking-name-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking-contact">Телефон / Telegram / WhatsApp *</Label>
                  <Input
                    id="booking-contact"
                    name="contact"
                    required
                    placeholder="+7 (999) 000-00-00 или @username"
                    data-testid="booking-contact-input"
                  />
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <Label>Опыт в йоге</Label>
                <Select
                  value={experience}
                  onValueChange={(value) => setExperience(value)}
                >
                  <SelectTrigger
                    className="w-full"
                    data-testid="booking-experience-select"
                  >
                    <SelectValue placeholder="Выберите ваш уровень" />
                  </SelectTrigger>
                  <SelectContent>
                    {EXPERIENCE.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-6 flex min-h-0 flex-1 flex-col space-y-2">
                <Label htmlFor="booking-message">Пожелания или вопросы</Label>
                <Textarea
                  id="booking-message"
                  name="message"
                  rows={4}
                  data-testid="booking-message-textarea"
                  className="min-h-32 flex-1 field-sizing-fixed"
                  placeholder="Расскажите о вашем запросе на ретрит, пищевых предпочтениях или ограничениях по здоровью…"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={sending}
                data-testid="booking-submit-button"
                className="mt-8 w-full rounded-full bg-clay text-base text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-clay/90 sm:w-auto sm:px-10"
              >
                {sending ? "Отправляем…" : "Отправить заявку"}
              </Button>
              {error ? (
                <p className="mt-4 text-sm text-clay" role="alert">
                  {error}
                </p>
              ) : null}
              {submitted ? (
                <p className="mt-4 text-sm text-jungle">
                  Спасибо. Мы получили заявку и свяжемся с вами.
                </p>
              ) : (
                <p className="mt-4 text-xs text-stone-warm">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                  Никакого спама — только один осмысленный диалог о вашем ретрите.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
