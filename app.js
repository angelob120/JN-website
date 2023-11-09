
// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// app.js

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB--nEJSWdK-kOqXkRp1bkfm-xz8SwfE0M",
    authDomain: "contact-from-34048.firebaseapp.com",
    projectId: "contact-from-34048",
    storageBucket: "contact-from-34048.appspot.com",
    messagingSenderId: "1017694825042",
    appId: "1:1017694825042:web:c549d66aa664c34b5acd8b",
    measurementId: "G-3BGG68THDS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Cloud Firestore and get a reference to the service
  const db = firebase.firestore();
  
  // Get a reference to the Firestore collection
  const contactFormCollectionRef = db.collection('contactFormSubmissions');
  
  // Listen for form submissions
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    
    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    // Add a new document with a generated id to Firestore
    contactFormCollectionRef.add({
      name: name,
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() // Adds a server-side timestamp to the document
    }).then(() => {
      console.log('Form submission successful');
      // Here you can clear the form or show a success message
      alert('Thank you for your message! We will get back to you soon.');
      document.getElementById('contact-form').reset(); // Reset the form after submission
    }).catch((error) => {
      console.error('Error writing document: ', error);
      // Here you can handle the error, show an error message, etc.
      alert('Oops! Something went wrong. Please try again.');
    });
  }
  