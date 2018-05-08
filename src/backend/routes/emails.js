const { emailsDb, usersDb } = require("../db");
const promiseHelper = require("../utils/createPromise");

const getEmailsByRecipientName = username => {
  console.log(username);
  return promiseHelper.createPromise((resolve, reject) => {
    emailsDb.each(
      "SELECT * FROM EMAILS WHERE RECIPIENTS = ?",
      [username],
      (err, emails) => {
        if (err) reject(err);
        resolve(emails);
      }
    );
  });
};

const getSentEmailsBySenderName = sender =>
  promiseHelper.createPromise((resolve, reject) => {
    emailsDb.each(
      "SELECT * FROM EMAILS WHERE SENDER = ?",
      [sender],
      (err, emails) => {
        if (err) reject(err);
        resolve(emails);
      }
    );
  });

const deleteEmailById = id =>
  promiseHelper.createPromise((resolve, reject) => {
    emailsDb.run("DELETE FROM EMAILS WHERE ID = ?", id, err => {
      if (err) reject(err);
      resolve("Deleted email from database");
    });
  });

const getAllEmails = () =>
  promiseHelper.createPromise((resolve, reject) => {
    emailsDb.all("SELECT * FROM EMAILS", [], (err, emails) => {
      if (err) reject(err);
      resolve(emails);
    });
  });

const saveNewEmail = email =>
  promiseHelper.createPromise((resolve, reject) => {
    emailsDb.run(
      "INSERT INTO EMAILS (SENDER, RECIPIENTS, CC, SUBJECT, BODY) VALUES(?, ?, ?, ?, ?)",
      [email.sender, email.recipients, email.cc, email.subject, email.body],
      err => {
        if (err) reject(err);
        resolve("Saved new email");
      }
    );
  });

module.exports = [
  {
    method: "GET",
    path: "/api/emails",
    handler: (req, h) => getAllEmails()
  },
  {
    method: "GET",
    path: "/api/emails/{username}",
    handler: (req, h) => getEmailsByRecipientName(req.params.username)
  },
  {
    method: "GET",
    path: "/api/sent-emails/{sender}",
    handler: (req, h) => getSentEmailsBySenderName(req.params.sender)
  },
  {
    method: "DELETE",
    path: "/api/emails/{id}",
    handler: (req, h) => deleteEmailById(req.params.id)
  },
  {
    method: "POST",
    path: "/api/emails",
    handler: (req, h) => saveNewEmail(req.payload)
  }
];
