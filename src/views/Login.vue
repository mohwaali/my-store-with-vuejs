<template>
  <div v-if="$store.state.coockies" class=" logins login ">
    <Login />

    <div class="nav">
      <div>
        او تسجيل الدخول باستخدام
      </div>

      <div class="buttons">
        <button class="button is-danger" @click="googleLogin">
          <fa class="icon is-large fa-1x" :icon="['fab', 'google']"> </fa>
        </button>

        <button class="button is-link" @click="loginfacebook">
          <fa class="icon is-large fa-1x" :icon="['fab', 'facebook']"> </fa>
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="section notification is-info">
      <h3>
        <router-link to="/"><button class="delete"></button> </router-link> لا
        تملك الصلاحية لدخول هذه الصفحة
      </h3>
    </div>
  </div>
</template>
<script>
import Login from "../components/login/Login.vue";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

export default {
  name: "login",
  components: { Login },
  setup() {
    const auth = getAuth();
    // تسجيل الدخول عن طريق جوجل   ---------
    const googleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    };
    //loginfacebook loginfacebook loginfacebook loginfacebook

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
