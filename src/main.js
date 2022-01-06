import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import main from "./sass/main.scss";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
//import   firebase  from "firebase";
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgQekIpb6VprC36AoNHU5KenysUsGL60U",
  authDomain: "aladdin-906fa.firebaseapp.com",
  databaseURL: "https://aladdin-906fa-default-rtdb.firebaseio.com",
  projectId: "aladdin-906fa",
  storageBucket: "aladdin-906fa.appspot.com",
  messagingSenderId: "600935047342",
  appId: "1:600935047342:web:8ce530eb630fb41b074d3f",
  measurementId: "G-X36Q03W9EK"
}; 

// Initialize Firebase const analytics =
const  app = initializeApp(firebaseConfig);
getAnalytics(app);
getStorage(app);
 
library.add(fas, fab);

createApp().config.productionTip = false;
createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(main)
  .mount("#app");
