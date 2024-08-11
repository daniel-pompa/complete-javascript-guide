/**
 * Validates the e-mail address.
 * @param {string} value - The email address to validate.
 * @returns {string} - Returns 'Not available' if the email is empty; otherwise, returns the trimmed email if valid.
 * @throws {Error} - Throws an error if the email format is invalid.
 */
export const validateEmail = value => {
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!value || value.trim() === '') {
    return 'Not available';
  }
  if (!EMAIL_REGEX.test(value)) {
    throw new Error('The email does not have a valid format.');
  }
  return value.trim();
};
