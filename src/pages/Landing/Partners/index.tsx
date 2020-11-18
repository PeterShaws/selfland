import React from 'react';

import { Container } from './styles';

import garnetLogo from '../../../assets/garnet-logo.svg';
import halLogo from '../../../assets/hal-logo.svg';
import lentilLogo from '../../../assets/lentil-logo.svg';
import macrohardLogo from '../../../assets/macrohard-logo.svg';
import mugpadLogo from '../../../assets/mugpad-logo.svg';

const Partners: React.FC = () => (
  <Container>
    <div className="center">
      <h1>Partners</h1>
      <section>
        <img src={garnetLogo} alt="garnet" />
        <img src={halLogo} alt="hal" />
        <img src={lentilLogo} alt="lentil" />
        <img src={macrohardLogo} alt="macrohard" />
        <img src={mugpadLogo} alt="mugpad" />
      </section>
    </div>
  </Container>
);

export default Partners;
