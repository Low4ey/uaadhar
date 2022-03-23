import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBjKuI8VxbnwHJRaq8sWecIny0cih1Hggg",
    authDomain: "otp-app-3b2f7.firebaseapp.com",
    projectId: "otp-app-3b2f7",
    storageBucket: "otp-app-3b2f7.appspot.com",
    messagingSenderId: "1076219629770",
    appId: "1:1076219629770:web:b763f08e4000bddd07a433"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase 