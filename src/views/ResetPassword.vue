<template>
  <div  v-if="$store.state.coockies"  class="logins">
  <div v-if="loding">
   loding ...
  </div>
    <div
      v-if="showAlert"
      class="notification"
      :class="{
        'is-success': succsessAdd ,
        'is-danger' : dangerAdd   ,
      }"
    >
      <span v-if="dangerAdd">
        <button @click="showAlert = false" class="delete"></button>
        {{ messagedangerAdd }} {{ counter }}
      </span>
      <span v-if="succsessAdd">
        <button @click="showAlert = false" class="delete"></button>
        {{ messagedangerAdd }} {{ counter }}
      </span>
    </div> 
    <!--ادخال الايميل --> 
    <div class="field">
      <label class="label"></label>

      <div class="nav ">
        <h3 class="h1 is-1   has-text-info ">
          <fa icon="user" /> استرجاع كلمة السر
        </h3>

        <router-link to="/" exact>
          <button class="delete is-large"></button>
        </router-link>
      </div>

      <div class="nav">
        <label class="label"> البريد الاليكتروني</label>
        <label>
          <router-link to="/register">انشاء حساب </router-link> |
          <router-link to="/login">تسجيل الدخول</router-link>
        </label>
      </div>

      <div class="control has-icons-left has-icons-right">
        <input
          :class="{
            input: true,
            'is-danger': showDanger,
            'is-success': isSuccess,
          }"
          type="email"
          placeholder="Email input"
          v-model="email"
          @keyup="verifeemail"
        />
        <span class="icon is-small is-left">
          <fa icon="envelope" />
        </span>
        <span v-if="showDanger" class="icon is-small is-right">
          <fa icon="exclamation-triangle" />
        </span>
      </div>
      <p v-if="showDanger" :class="{ help: true, 'is-danger': showDanger }">
        {{ messagealert }}
      </p>
      <p v-if="showSuccess" :class="{ help: true, 'is-success': showSuccess }">
        {{ successMessage }}
      </p>
    </div>
    <!--ادخال الايميل-->
    <!-- زر الارسال -->
    <div class="field">
      <div class="control">
        <button
          class="button is-primary"
          @click="postDataAll"
          v-bind:disabled="disabled"
        >
          استرجاع كلمة السر
        </button>
      </div>
    </div>
    <!-- زر الارسال -->
  </div> 
   <div v-else>
    <div class="section notification is-info">
       <router-link to="/"><button class="delete"> </button>  </router-link>  
       <h3>لا تملك الصلاحية لدخول هذه الصفحة </h3>
      </div>
     
  </div>

</template>
<script>
 import  myUserStup  from '../use/authsigninemailandpassword'
export default {
  name: "signups", 

  setup(){
     
     const datauser = myUserStup("resetpassword");
     return {...datauser };
  } 
};
</script>
<style lang=""></style>
