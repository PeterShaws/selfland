import React from 'react';
import { RiMailLine, RiUser6Line } from 'react-icons/ri';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Cards from './Cards';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Partners from './Partners';

import { Container } from './styles';

const Landing: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <blockquote>
        “If you do not know where you come from, then you don&rsquo;t know where
        you are, and if you don&rsquo;t know where you are, then you don&rsquo;t
        know where you&rsquo;re going. And if you don&rsquo;t know where
        you&rsquo;re going, you&rsquo;re probably going wrong.”
        <strong>Terry Pratchett, I Shall Wear Midnight</strong>
      </blockquote>
      <hr />
      <h3>
        We can help you begin your journey towards the best version of you.
      </h3>
      <form action="">
        <Input
          name="name"
          icon={RiUser6Line}
          type="name"
          placeholder="My name (optional)"
          className="input"
        />
        <Input
          name="email"
          icon={RiMailLine}
          type="email"
          placeholder="My e-mail"
          className="input"
        />
        <Button type="button">Send</Button>
      </form>
      <hr />
      <Cards />
    </Content>
    <Partners />
    <Footer />
  </Container>
);

export default Landing;
