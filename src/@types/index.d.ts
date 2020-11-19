declare module '*.png';

declare interface CardData {
  id: number;
  icon: keyof typeof import('react-icons/ri');
  title: string;
  body: string;
}

declare interface LandingFormData {
  name: string;
  email: string;
}

declare interface ValidationErrors {
  [path: string]: string;
}
