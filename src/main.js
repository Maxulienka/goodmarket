import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCHfhEs8rRVB8wwA_Bb__N42jsKZx6v2Pc",
  authDomain: "dobry-trh-b99f7.firebaseapp.com",
  projectId: "dobry-trh-b99f7",
  storageBucket: "dobry-trh-b99f7.appspot.com",
  messagingSenderId: "11983853599",
  appId: "1:11983853599:web:2b962703a5f5a1506f1d2a",
  measurementId: "G-96H009EGM2"
};

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

initializeApp(firebaseConfig);
const app = createApp(App) 

app.use(router)
app.mount('#app')