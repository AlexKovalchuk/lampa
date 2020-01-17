import app from 'firebase/app';
import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

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

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}
export const fireBaseApi = firebase.initializeApp(firebaseConfig);
export default Firebase