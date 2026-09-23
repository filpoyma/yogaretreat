export interface INavLink {
  readonly label: string;
  readonly href: string;
  readonly testId: string;
}

export interface IPillar {
  readonly index: string;
  readonly title: string;
  readonly description: string;
}

export interface IScheduleSlot {
  readonly time: string;
  readonly title: string;
  readonly description: string;
}

export interface IInclusion {
  readonly title: string;
  readonly description: string;
  readonly icon: "bed" | "salad" | "flower" | "book" | "hand" | "flame";
}

export interface IResult {
  readonly title: string;
  readonly description: string;
  readonly icon: "sparkles" | "moon" | "heart" | "compass";
}

export interface IGalleryItem {
  readonly src: string;
  readonly alt: string;
  readonly title: string;
  readonly description: string;
  readonly span: string;
  readonly aspect: string;
}

export interface IFaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface IBookingPayload {
  name: string;
  contact: string;
  experience: string;
  message: string;
}
