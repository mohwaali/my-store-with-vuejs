<template>
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

  <div class="field">
    <label class="label"></label>

    <div class="nav ">
      <h3 class="title is-4   has-text-info ">
        <fa icon="user" /> انشاء حساب جديد
      </h3>

      <router-link to="/" exact>
        <button class="delete is-large"></button>
      </router-link>
    </div>

    <div class="nav">
      <label class="label"> البريد الاليكتروني</label>
      <label>
        <span> لديك حساب </span>
       <b> <router-link to="/login"> تسجيل الدخول </router-link></b>
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
    </div>
    <p v-if="showDanger" :class="{ help: true, 'is-danger': showDanger }">
      {{ messagealert }}
 
    </p>
    <p v-if="showSuccess" :class="{ help: true, 'is-success': showSuccess }">
      {{ successMessage }}
    </p>
  </div>

  <div class="field">
    <div class="nav">
      <label class="label">كلمة السر </label>

      <label @click="showpassword" v-if="showeyeslash"><fa icon="eye" />
     <a>   اضهار كلمة السر </a> 
      </label>
      <label @click="showpassword" v-if="showeye"><fa icon="eye-slash" />
       <a>  اخفاء كلمة السر </a> 
       </label>
    </div>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input"
        :class="{ 'is-success': successPass, 'is-danger': dangerPass }"
        v-bind:type="typpassword"
        placeholder="Text input"
        v-model="password"
        @keyup="verifepasswosd"
      />
      <span class="icon is-small is-left">
        <span v-if="showeye">
          <fa icon="eye-slash" />
        </span>
        <span v-if="showeyeslash">
          <fa icon="eye" />
        </span>
      </span>
    </div>
    <div class="nav">
      <p class="help" :class="{ 'is-success': successPasschar8 }">
        8 احرف على الاقل
      </p>
      <p class="help" :class="{ 'is-success': successPassuper }">
        حرف كبير واحد
      </p>
      <p class="help" :class="{ 'is-success': successPasslower }">
        حروف صغيرة
      </p>
      <p class="help" :class="{ 'is-success': successPassnum }">
        رقم واحد على الاقل
      </p>
      <p class="help" :class="{ 'is-success': successPasschars }">
        رمز واحد على الاقل مثل @
      </p>
    </div>
  </div>

  <div class="field">
    <div class="control">
      <label class="checkbox" @click="verifechackbox">
        <input type="checkbox" v-model="checkbox" />
        الموافقة على <a href="#"> سياسة الخصوصية </a
        ><a href="#"> شروط الاستخدام </a>
      </label>
    </div>
  </div>

  <div class="field">
    <div class="control">
      <button
        @click="postDataAll"
        v-bind:disabled="disabled"
        class="button is-primary "
      >
        انشاء حساب
      </button>
    </div>
  </div>
</template>

<script>
 import  myUserStup  from '../../use/authsigninemailandpassword'
export default {
  name: "signups", 

  setup(){
     
     const datauser = myUserStup("signup");
     return {...datauser };
  } 
};
</script>
