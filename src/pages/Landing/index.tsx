import React from 'react';
import * as RemixIcon from 'react-icons/ri';

import Button from '../../components/Button';
import Input from '../../components/Input';
import cards from './cards';
import Footer from './Footer';
import Hero from './Hero';
import Partners from './Partners';

import { Cards, Container, Content, ImageCredit } from './styles';

const Landing: React.FC = () => (
  <Container>
    <Hero />
    <Content>
      <div className="center">
        <blockquote>
          “If you do not know where you come from, then you don&rsquo;t know
          where you are, and if you don&rsquo;t know where you are, then you
          don&rsquo;t know where you&rsquo;re going. And if you don&rsquo;t know
          where you&rsquo;re going, you&rsquo;re probably going wrong.”
          <strong>Terry Pratchett, I Shall Wear Midnight</strong>
        </blockquote>
        <hr />
        <h3>
          We can help you begin your journey towards the best version of you.
        </h3>
        <form action="">
          <div className="center">
            <Input
              name="email"
              icon={RemixIcon.RiMailLine}
              type="email"
              placeholder="Enter your e-mail"
            />
            <Button type="button">Send</Button>
          </div>
        </form>
        <hr />
        <Cards>
          {cards.map(card => {
            const Icon = RemixIcon[card.icon];
            return (
              <li key={card.id}>
                <header>
                  <Icon />
                  <h4>{card.title}</h4>
                </header>
                <p>{card.body}</p>
              </li>
            );
          })}
        </Cards>
      </div>
      <ImageCredit>
        <span>
          Photo by{' '}
          <a href="https://unsplash.com/@wocintechchat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Christina @ wocintechchat.com
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </ImageCredit>
    </Content>
    <Partners />
    <Footer />
  </Container>
);

export default Landing;
