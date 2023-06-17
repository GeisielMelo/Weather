// This regex returns true if:
// string contains only letters and spaces(special characters are not allowed).
// string has at least two words.
// last word is exactly 2 characters long.

const isValidString = (string) => {
  const regex = /^[a-zA-Z\s]+$/;
  const words = string.trim().split(/\s+/);

  return (
    regex.test(string) &&
    words.length >= 2 &&
    words[words.length - 1].length === 2
  );
};

export default isValidString;
