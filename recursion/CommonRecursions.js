/*
REVERSE
prompt: write a function which accepts a string and returns a new string in reverse
Example:
reverse('awesome') => 'emosewa'
reverse('hello') => 'olleh
*/

const reverse = (str) => {
  if (str.length === 1) {
    return str;
  }
  let lastElem = str[str.length - 1];
  let restElem = str.slice(0, str.length - 1);
  return lastElem + reverse(restElem);
};
