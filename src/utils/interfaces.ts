import * as RemixIcon from 'react-icons/ri';

export interface CardData {
  id: number;
  icon: keyof typeof RemixIcon;
  title: string;
  body: string;
}

export interface LandingFormData {
  name: string;
  email: string;
}

export interface ValidationErrors {
  [path: string]: string;
}
