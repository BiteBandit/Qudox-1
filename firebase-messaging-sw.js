// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

// Your Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyAtsUgFSLRl3efgiRTWUM-4SWu0NNTnnmY",
  authDomain: "qudox-c4ffe.firebaseapp.com",
  projectId: "qudox-c4ffe",
  storageBucket: "qudox-c4ffe.appspot.com", // ✅ fixed this line
  messagingSenderId: "499837322901",
  appId: "1:499837322901:web:e5baca4d53b1bb6ca1fd9c"
});

// Initialize messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo.png" // ✅ Optional: replace with your logo path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});