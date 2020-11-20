import React, { useCallback, useState } from 'react';
import { RiCloseLine, RiMenuLine, RiUserAddLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Tooltip from '../Tooltip';

import { Container } from './styles';

const Header: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = useCallback(() => setShowNav(!showNav), [showNav]);

  return (
    <Container showNav={showNav}>
      <div className="center">
        <Tooltip message="Home" direction="bottom">
          <Link to="/">
            <h1>Selfland</h1>
          </Link>
        </Tooltip>
        <div className="right">
          <nav>
            <Tooltip message="What we want" direction="bottom">
              <Link to="/">Manifesto</Link>
            </Tooltip>
            <Tooltip message="Who we are" direction="bottom">
              <Link to="/">About Us</Link>
            </Tooltip>
            <Tooltip message="Our self-knowledge programs" direction="bottom">
              <Link to="/">Tracks</Link>
            </Tooltip>
            <Tooltip message="Opportunities for mentors" direction="bottom">
              <Link to="/">Careers</Link>
            </Tooltip>
            <Tooltip message="Sign up or Enter" direction="bottom">
              <Link to="/" className="log-in">
                <RiUserAddLine />
              </Link>
            </Tooltip>
          </nav>
          <RiMenuLine className="toggle show-nav" onClick={toggleNav} />
          <RiCloseLine className="toggle hide-nav" onClick={toggleNav} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
