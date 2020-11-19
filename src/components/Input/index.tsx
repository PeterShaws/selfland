import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
} from 'react';
import { IconType } from 'react-icons';

import { useField } from '@unform/core';

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
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [showError, setShowError] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const focusInput = useCallback(() => inputRef.current?.focus(), []);

  const handleFocus = useCallback(() => {
    setHasFocus(true);
    setShowError(false);
  }, []);

  const handleBlur = useCallback(() => {
    setHasFocus(false);
    setHasValue(!!inputRef.current?.value);
    if (inputRef.current?.value) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!event.target.value);
    if (event.target.value) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (error) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [error]);

  return (
    <Container
      className={className}
      hasFocus={hasFocus}
      hasValue={hasValue}
      hasError={!!error && showError}
      data-error={error}
      onClick={focusInput}
    >
      {Icon && <Icon onClick={focusInput} />}
      <input
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
    </Container>
  );
};
export default Input;
