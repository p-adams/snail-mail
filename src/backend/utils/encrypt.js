const promiseHelper = require("./createPromise");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const createPasswordHash = passwordAsPlainText =>
  promiseHelper.createPromise((resolve, reject) => {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(passwordAsPlainText, salt, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });

const passwordDoesMatch = (passwordAsPlainText, hash) =>
  promiseHelper.createPromise((resolve, reject) => {
    bcrypt.compare(passwordAsPlainText, hash, (err, isMatch) => {
      if (err) reject(err);
      resolve(isMatch);
    });
  });

module.exports = {
  createPasswordHash,
  passwordDoesMatch
};
