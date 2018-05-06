const sqlite3 = require("sqlite3");

const usersDb = new sqlite3.Database(
  "./users.db",
  sqlite3.OPEN_READWRITE,
  err => {
    if (err) console.log(err.message);
    else console.log("Connected to users database");
  }
);

const emailsDb = new sqlite3.Database(
  "./emails.db",
  sqlite3.OPEN_READWRITE,
  err => {
    if (err) console.log(err.message);
    else console.log("Connected to emails database");
  }
);

module.exports = { usersDb, emailsDb };
