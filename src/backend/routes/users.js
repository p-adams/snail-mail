const { usersDb } = require("../db");
const encrypt = require("../utils/encrypt");
const promiseHelper = require("../utils/createPromise");

const getUserById = id =>
  promiseHelper.createPromise((resolve, reject) => {
    usersDb.all(
      "SELECT username, password FROM USERS where ID = ?",
      id,
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });

const getUserByUsername = username =>
  promiseHelper.createPromise((resolve, reject) => {
    usersDb.all(
      "SELECT * FROM USERS where USERNAME = ?",
      username,
      (err, users) => {
        if (err) reject(err);
        resolve(users);
      }
    );
  });

const saveUser = newUser =>
  promiseHelper.createPromise((resolve, reject) => {
    encrypt.createPasswordHash(newUser.password).then(passwordHash => {
      usersDb.run(
        "INSERT INTO USERS (USERNAME, PASSWORD) VALUES (?, ?)",
        [newUser.username, passwordHash],
        err => {
          if (err) reject(err);
          resolve("Saved new user");
        }
      );
    });
  });

const createNewUser = newUserData =>
  promiseHelper.createPromise((resolve, reject) => {
    getUserByUsername(newUserData.username).then(user => {
      // if we did not find a user in our database with
      // that username, we save new user; otherwise, we pass a string
      // to the frontend notifying that user already exists
      if (!user.length) resolve(saveUser(newUserData));
      resolve("User already exists");
    });
  });

const authenticateUser = credentials =>
  promiseHelper.createPromise((resolve, reject) => {
    getUserByUsername(credentials.username).then(user => {
      // if the user exists
      // check to see if plain text password matches hashed password
      if (user.length) {
        encrypt
          .passwordDoesMatch(credentials.password, user[0].PASSWORD)
          .then(isMatch => {
            if (isMatch) resolve("Authenticated");
            resolve("Wrong username or password");
          });
      } else resolve("Account does not exist");
    });
  });

const changePassword = credentials =>
  promiseHelper.createPromise((resolve, reject) => {
    encrypt.createPasswordHash(credentials.password).then(hash => {
      usersDb.run(
        "UPDATE USERS SET PASSWORD = ? WHERE USERNAME = ?",
        [hash, credentials.username],
        (err, res) => {
          if (err) reject(err);
          resolve("Changed password");
        }
      );
    });
  });

module.exports = [
  {
    method: "GET",
    path: "/api/users/{id}",
    handler: (req, h) => getUserById(req.params.id)
  },
  {
    method: "POST",
    path: "/api/users",
    handler: (req, h) => createNewUser(req.payload)
  },
  {
    method: "POST",
    path: "/api/users/update-password",
    handler: (req, h) => changePassword(req.payload)
  },
  {
    method: "POST",
    path: "/api/users/authenticate",
    handler: (req, h) => authenticateUser(req.payload)
  }
];
