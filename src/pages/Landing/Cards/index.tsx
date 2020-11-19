import React from 'react';
import Commonmark from 'react-commonmark';
import * as RemixIcon from 'react-icons/ri';

import cards from './cards';

import { Container } from './styles';

const Cards: React.FC = () => (
  <Container>
    {cards.map(card => {
      const Icon = RemixIcon[card.icon];
      return (
        <section key={card.id} className="card">
          <header>
            <Icon />
            <h4>{card.title}</h4>
          </header>
          <Commonmark source={card.body} escapeHtml />
        </section>
      );
    })}
  </Container>
);

export default Cards;
