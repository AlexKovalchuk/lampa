import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCBOxQIDhTxkUK-_OB3OOT9wWNUiR_ZJYc",
  authDomain: "lampa-86b3f.firebaseapp.com",
  databaseURL: "https://lampa-86b3f.firebaseio.com",
  projectId: "lampa-86b3f",
  storageBucket: "lampa-86b3f.appspot.com",
  messagingSenderId: "882520317112",
  appId: "1:882520317112:web:2345c2959d269b0e9e284d",
  measurementId: "G-STFFFVKEZV"
};

export const fireBaseApi = firebase.initializeApp(firebaseConfig);
