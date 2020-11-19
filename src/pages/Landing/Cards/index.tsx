import React from 'react';
import * as RemixIcon from 'react-icons/ri';

import cards from './cards';

import { Container } from './styles';

const Cards: React.FC = () => (
  <Container>
    {cards.map(card => {
      const Icon = RemixIcon[card.icon];
      return (
        <li key={card.id} className="card">
          <header>
            <Icon />
            <h4>{card.title}</h4>
          </header>
          <p>{card.body}</p>
        </li>
      );
    })}
  </Container>
);

export default Cards;
