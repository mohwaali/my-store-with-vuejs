<template >
  <div v-if="$store.state.coockies" class=" logins login ">
    <Signup /> 

    <div class="nav">
      <p class="block"> او انشاء حساب بإستخدام</p>
      <div class="buttons">
        <button class="button is-danger" @click="googleLogin">
          <fa :icon="['fab', 'google']"> </fa>
        </button>
        <button class="button is-link" @click="loginfacebook">
          <fa :icon="['fab', 'facebook']"> </fa>
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="section notification is-info">
  <router-link to="/"><button class="delete"> </button>  </router-link>  
       <h3>لا تملك الصلاحية لدخول هذه الصفحة </h3>
      </div> 
  </div>
</template>
<script>
import Signup from "../components/login/Signup.vue";
 
import {
  getAuth, 
  signInWithRedirect,
  GoogleAuthProvider,FacebookAuthProvider
} from "firebase/auth";
  
export default {
  name: "register",
  components: { Signup },
  setup() { 
    const auth  = getAuth();
   // const store = useStore();
 
     // تسجيل الدخول عن طريق جوجل   ---------
    const googleLogin = () => {
       const provider = new GoogleAuthProvider();
       signInWithRedirect(auth, provider);
    };
    // تسجيل الدخول عن طريق جوجل  FacebookAuthProvider ---------
     
     const loginfacebook = () => {
      const provider = new FacebookAuthProvider();
      signInWithRedirect(auth, provider);
    };
    return {
      googleLogin,
      loginfacebook,auth
    };
  },
 
};
</script>
<style lang=""></style>
