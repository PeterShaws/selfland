import React from 'react';

import { Container, ImageCredit } from './styles';

const Main: React.FC = ({ children }) => {
  return (
    <Container className="content">
      <div className="center">{children}</div>
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
    </Container>
  );
};

export default Main;
