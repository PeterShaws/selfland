import React from 'react';

import { Container } from './styles';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  direction?: 'top' | 'bottom';
}

const Tooltip: React.FC<TooltipProps> = ({
  message,
  children,
  direction = 'top',
  ...props
}) => (
  <Container {...props} direction={direction}>
    <span className="tooltip">{message}</span>
    {children}
  </Container>
);

export default Tooltip;
