
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
    apiKey: "AIzaSyD7CDZC5gfCsiVVCeqNfM75o9U45OJzWJk",
    authDomain: "naksa-60265.firebaseapp.com",
    projectId: "naksa-60265",
    storageBucket: "naksa-60265.appspot.com",
    messagingSenderId: "1053971998858",
    appId: "1:1053971998858:web:53fecee674690d67d86573",
    measurementId: "G-0N6MZ9FEG9"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});