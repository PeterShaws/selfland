import React from 'react';
import { RiUser6Line as UserIcon } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <div className="center">
      <Link to="/home">
        <h1>Selfland</h1>
      </Link>
      <div className="right">
        {' '}
        <nav>
          <Link to="/manifesto">Manifesto</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/tracks">Tracks</Link>
          <Link to="/careers">Careers</Link>
        </nav>
        <UserIcon />
      </div>{' '}
    </div>
  </Container>
);

export default Header;
