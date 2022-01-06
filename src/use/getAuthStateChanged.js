import {
    getAuth,
    onAuthStateChanged,
  } from "firebase/auth";
  import { ref ,onMounted , computed} from "vue"; 
export default function getDataAuth(){
    const displayNames = ref("");
    const emails = ref("");
    const photoURLs = ref("");
    const uids = ref("");
    const emailVerifieds = ref(false); 
    const sendEmailchak  = ref(false);
    //--
    onMounted(() => {
      myuser();
      shackEmaileCookie;
    });
//----
const myuser =  () => {
  

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
          
          emails.value         = user.email;
          photoURLs.value      = user.photoURL;
          emailVerifieds.value = user.emailVerified;
          uids.value           = user.uid;
          if(user.displayName) 
               displayNames.value   = user.displayName;
            else
               displayNames.value   = user.email;

               if(user.photoURL) 
               photoURLs.value   = user.photoURL;
            else
               photoURLs.value   = require("../assets/images/avatar2.png");
    
      }
    });
}

const shackEmaileCookie =  computed(()=> {
  const sendEmail = window.localStorage.getItem("sendEmailVerifi");
  if(sendEmail !== null)
       return  sendEmailchak.value = true ;
         else
       return  sendEmailchak.value = false ;


});


return {displayNames,emails,photoURLs,emailVerifieds,uids,sendEmailchak,myuser,shackEmaileCookie}

}