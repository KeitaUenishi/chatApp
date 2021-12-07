
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIBY9ZttxGWZZdX8s0rKYlADJBrS33Sxw",
  authDomain: "idobatakaigi-uenishi.firebaseapp.com",
  projectId: "idobatakaigi-uenishi",
  storageBucket: "idobatakaigi-uenishi.appspot.com",
  messagingSenderId: "62391809303",
  appId: "1:62391809303:web:3f712df444eac6c082b352"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
}