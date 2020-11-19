import React, { useCallback, useRef } from 'react';
import { RiMailLine, RiUser6Line } from 'react-icons/ri';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Cards from './Cards';
import Main from './Main';
import Footer from './Footer';
import Hero from './Hero';
import Partners from './Partners';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormData {
  name: string;
  email: string;
}

const Landing: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().matches(
          /(^$|^['-\sA-Za-z\u00c0-\u024f\u1e00-\u1eff]+$)/,
          'This name does not look right',
        ),
        email: Yup.string()
          .required('We need your e-mail')
          .email('We need a valid e-mail'),
      });
      await schema.validate(data, { abortEarly: false });
      // eslint-disable-next-line no-console
      console.log(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
      if (error instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(error);
        formRef.current?.setErrors(validationErrors);
      }
    }
  }, []);

  return (
    <Container>
      <Hero />
      <Main>
        <blockquote>
          “If you do not know where you come from, then you don’t know where you
          are, and if you don’t know where you are, then you don’t know where
          you’re going. And if you don’t know where you’re going, you’re
          probably going wrong.”
          <strong>Terry Pratchett, I Shall Wear Midnight</strong>
        </blockquote>
        <hr />
        <h3>
          We can help you begin your journey towards the best version of you.
        </h3>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            icon={RiUser6Line}
            placeholder="My name (optional)"
            className="input"
          />
          <Input
            name="email"
            icon={RiMailLine}
            placeholder="My e-mail"
            className="input"
          />
          <Button type="submit">Send</Button>
        </Form>
        <hr />
        <Cards />
      </Main>
      <Partners />
      <Footer />
    </Container>
  );
};

export default Landing;
