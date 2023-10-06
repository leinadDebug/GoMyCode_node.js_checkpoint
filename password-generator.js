const generate = require('generate-password');

const generateRandomPassword = () => {
  const password = generate.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });
  return password;
};

const generatedPassword = generateRandomPassword();
console.log('Generated Password:', generatedPassword);
