import * as RemixIcon from 'react-icons/ri';

interface CardData {
  id: number;
  icon: keyof typeof RemixIcon;
  title: string;
  body: string;
}

export default CardData;
