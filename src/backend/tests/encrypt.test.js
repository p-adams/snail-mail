const encrypt = require("../utils/encrypt");

test("Password Hash", () => {
  return encrypt
    .createPasswordHash("meow")
    .then(hash => expect(hash).not.toEqual("meow"));
});

test("Plain Text Password Matches Hash", () => {
  return encrypt
    .passwordDoesMatch("meow", "meow")
    .then(isMatch => expect(isMatch).toEqual(false));
});
