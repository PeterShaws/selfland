import CardData from './CardData';

const cards: CardData[] = [
  {
    id: 0,
    icon: 'RiAwardLine',
    title: 'Qualified Mentors',
    body: [
      'Over 300 certified professionals from the most diverse fields of',
      'knowledge, chosen specifically for their skills in helping others find',
      'their strengths and weaknesses, as well as ways to harness the former',
      'and grow from the latter.',
    ].join(' '),
  },
  {
    id: 1,
    icon: 'RiBankLine',
    title: 'A Thriving Community',
    body: [
      'Engage in meaningful discussions with your fellow mentorees, sharing',
      'your experiences in video chat rooms moderated by our team of mentors.',
    ].join(' '),
  },
  {
    id: 2,
    icon: 'RiCustomerService2Line',
    title: 'Personalized Help',
    body: [
      'Your needs are just that---*your* needs. Our mentors are prepared to',
      'give you the assistance *you* need to achieve your true potential.',
    ].join(' '),
  },
  {
    id: 3,
    icon: 'RiLineChartLine',
    title: 'Assured Growth',
    body: [
      'Every developer who took part in our program can attest to its',
      'effectiveness. We and our team of mentors are here to help you find who',
      'you are so that you can find where you can go from there.',
    ].join(' '),
  },
  {
    id: 4,
    icon: 'RiServiceLine',
    title: 'Grow Further By Helping',
    body: [
      "Pay it forward: there's always someone arriving at the step you just",
      'left, and we offer you the tools to further improve your soft skills',
      'by co-mentoring our newcomers. If this interests you, ask your mentors',
      'about this part of the program when you reach level 2.',
    ].join(' '),
  },
];

export default cards;
