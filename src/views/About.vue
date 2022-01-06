<template>
  <div class="about">
    <h1>hello my about mi</h1>
    <ul  >
       <li class="listitem">
       {{ user.displayName }}<br/>
       {{ user.email }}<br/>
       {{ user.photoURL }}<br/>
       <img :src=" user.photoURL " :alt="user.photoURL"/>
       {{ user.metadata }}<br/>
       {{ user.uid }}<br/>
       </li>
      

    </ul>
  </div>
</template>
<script>
//updateProfile
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "about",
  data() {
    return {
      user: {
        displayName: String,
        email: String,
        photoURL: String,
        emailVerified: Boolean,
        uid: Number,
        phoneNumber: String,
        metadata: Object,
      },
    };
  },
  created() {
    this.myuser();
  },
  methods: {
    myuser: function() {
      //const auth = getAuth();
      //const user = auth.currentUser;

      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user !== null) {
          // The user object has basic properties such as display name, email, etc.
          this.user.displayName = user.displayName;
          this.user.email = user.email;
          this.user.photoURL = user.photoURL;
          this.user.emailVerified = user.emailVerified;
          this.user.uid = user.uid;
          this.user.phoneNumber = user.phoneNumber;
          this.user.metadata = user.metadata.creationTime;

          // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
          const uid = user.uid;
          console.log(auth.currentUser);

          //  update user
          /*
updateProfile(auth.currentUser, {
  displayName: "mohamed radji", photoURL: "https://example.com/jane-q-user/profile.jpg"
 
}).then(() => {
  // Profile updated!
  // ...
  alert("success update user");
}).catch((error) => {
  // An error occurred
  // ...
});*/

          // ------------
        }
      });
    },
  },
};
</script>
