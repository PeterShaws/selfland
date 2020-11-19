import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}
const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  className,
  ...props
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const signalFocus = useCallback(() => setHasFocus(true), []);

  const signalBlur = useCallback(() => setHasFocus(false), []);

  return (
    <Container onClick={focusInput} hasFocus={hasFocus} className={className}>
      {Icon && <Icon onClick={focusInput} />}
      <input
        ref={inputRef}
        name={name}
        onFocus={signalFocus}
        onBlur={signalBlur}
        {...props}
      />
    </Container>
  );
};
export default Input;
