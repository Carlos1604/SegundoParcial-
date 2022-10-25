const firebase = require('firebase-admin');
const serviceAccount = require('../key.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

// Creating db object
const db = firebase.firestore();

module.exports = {
  db
}
