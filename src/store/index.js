import langeJson from "../json/lange/langeJson.json";
import langeJsonEn from "../json/lange/lanEn.json";

import { createStore } from "vuex";
//import { useRouter } from "vue-router"; 
//store.state.Lange.home -about -contact
import {  getAuth , onAuthStateChanged } from "firebase/auth";
const store = createStore({
  state: {
    dirictionrtl: true,
    dirictionltr: false,
    exdayscoockeilang: 360,
    cnamecoockeilang: "lang",
    langs: { ar: "ar", en: "en", fr: "fr" },
    coockeilang: "ar",
    Lange: langeJson,
    coockies : true,
  },
  getters: {

  //------دالة المستخدم  الكوكيز الجلسة ----------
    chackCookeiauthshanged(state){
 
      //const router = useRouter();
      const auth   = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          return (state.coockies  = true);
        } else {
       /*   setTimeout(()=>{
               router.replace("/");
 
          },3000);*/
         
          return (state.coockies = false);
        }
      });
     
    },//------ دالة التشييك على المستخدم  نهاية

    

  },
  mutations: {
    Changecoockeilang(state, event) {
      state.coockeilang = event;
      this.commit("setCookie", event);
      this.commit("shangeLangedata", event);
      this.commit("shangeLangedir", event);
    },

    shangeLangedir(state, data) {
      if (data == "ar") {
        state.dirictionrtl = true;
        state.dirictionltr = false;
      } else {
        state.dirictionrtl = false;
        state.dirictionltr = true;
      }
    },

    shangeLangedata(state, data) {
      // console.log(state);
      if (data == "en") {
        //this.commit('isEnLan');
        state.Lange = langeJsonEn;
      } else if (data == "ar") {
        // this.commit('isArLan');
        state.Lange = langeJson;
      }
    },

    setCookie(state, cvalue) {
      if (typeof Storage != undefined) {
        localStorage.setItem("lang", cvalue);
      } else {
        //cvalue = state.coockeilang;
        const cname = state.cnamecoockeilang;
        const exdays = state.exdayscoockeilang;
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
    },
  },
  actions: {},
  modules: {},
});
export default store;
