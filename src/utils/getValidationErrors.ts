import { ValidationError } from 'yup';

interface ValidationErrors {
  [path: string]: string;
}

export default function getValidationErrors(
  validationError: ValidationError,
): ValidationErrors {
  const validationErrors: ValidationErrors = {};

  if (validationError.inner?.length) {
    validationError.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
  } else {
    validationErrors[validationError.path] = validationError.message;
  }

  return validationErrors;
}
