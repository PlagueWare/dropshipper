// CREATE USERS LOCAL DATABASE
var db = new PouchDB('users');

// PRINT DATABASE INFO TO CONSOLE
db.info().then(function (info) {
    console.log(info);
  })

function addUserToDB(username, email, password) {
  var user = {
      "_id": username,
      "email": email,
      "password": password
    };
  db.put(user);
}