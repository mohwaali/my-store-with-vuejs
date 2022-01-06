import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toRefs ,reactive} from "vue";
import { useRouter } from "vue-router"; 
export default function myUserStup(typePost = null) {
 
  const userreactive = reactive({
    router    : useRouter(), 
    showAlert : false, 
    dangerAdd : false,
    succsessAdd : false,
    isSuccess : false,
    successPass : false,
    showAlert : false,
    showeye : false,
    isDanger : false,
    showSuccess : false,
    showDanger : false,
    showSuccessemail : false,
    checkbox : false,
    successPasschar8 : false,
    successPasslower : false,
    successPassnum : false,
    successPassuper : false,
    successPasschars : false,
    dangerPass : false,
    submit : false,
    loding : false,
    disabled : true,
    showeyeslash : true, 
    messagedangerAdd : "",email : "",password : "",typpassword : "password",successMessage : "",
    messagealert : "",sendEmailVerifi : "",counter : 10, 

  });


  //-------------
  const verifesubmit = () => {
    if (typePost == "login") {
      if (userreactive.successPass && userreactive.isSuccess) userreactive.disabled = false;
      else userreactive.disabled = true;
    } else if (typePost == "signup") {
      if (userreactive.successPass && userreactive.isSuccess && userreactive.checkbox)
      userreactive.disabled = false;
      else userreactive.disabled = true;
    } else if (typePost == "resetpassword") {
      if (userreactive.isSuccess) userreactive.disabled = false;
      else userreactive.disabled = true;
    }
  };
  //----------------
  const verifechackbox = () => {
    userreactive.checkbox = userreactive.checkbox ? false : true;
    verifesubmit();
  };

  //-------------
  const verifeemail = () => {
    //const str = up.email;
    const str = userreactive.email;
    const regex = /^([._a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const regexo = /^([._a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}\.([a-zA-Z]){2,3}$/;

    if (regex.test(str) || regexo.test(str)) {
      userreactive.isDanger  = false;
      userreactive.isSuccess = true;
      userreactive.messagealert = "";
      userreactive.showDanger = false;
    } else {
      userreactive.isSuccess = false;
      if (str != "") {
        userreactive.isDanger = true;
        userreactive.messagealert = "هذا ليس بريد اليكتروني";
        userreactive.showDanger = true;
        userreactive.showSuccess = false;
        userreactive.showSuccessemail = false;
      } else {
        userreactive.messagealert = "هذا الحقل اجباري لا يقبل قيمة فارغة";
        userreactive.showSuccess = false;
      }
    }
    verifesubmit();
  };
  //-------------------
  const verifepasswosd = () => {
    const str = userreactive.password;

    const lowerCase = new RegExp("(?=.*[a-z])");
    const upperCase = new RegExp("(?=.*[A-Z])");
    const Numbers = new RegExp("(?=.*[0-9])");
    const SpecialChar = new RegExp("(?=.*[!@#$%^&*])");
    const eightChar = new RegExp("(?=.{8})");

    if (eightChar.test(str)) {
      userreactive.successPasschar8 = true;
    } else {
      userreactive.successPasschar8 = false;
    }
    if (SpecialChar.test(str)) {
      userreactive.successPasschars = true;
    } else {
      userreactive.successPasschars = false;
    }
    if (Numbers.test(str)) {
      userreactive.successPassnum = true;
    } else {
      userreactive.successPassnum = false;
    }
    if (lowerCase.test(str)) {
      userreactive.successPasslower = true;
    } else {
      userreactive.successPasslower = false;
    }
    if (upperCase.test(str)) {
      userreactive.successPassuper = true;
    } else {
      userreactive.successPassuper = false;
    }

    if (
      eightChar.test(str) &&
      SpecialChar.test(str) &&
      Numbers.test(str) &&
      lowerCase.test(str) &&
      upperCase.test(str)
    ) {
      userreactive.successPass = true;
      userreactive.dangerPass = false;
    } else {
      userreactive.successPass = false;
      userreactive.dangerPass = true;
    }
    verifesubmit();
  };

  //--------------
  const showpassword = () => {
    userreactive.showeye = userreactive.showeye ? false : true;
    userreactive.showeyeslash = userreactive.showeyeslash ? false : true;
    userreactive.typpassword = userreactive.typpassword == "password" ? "text" : "password";
  };

  //------------------
  const postDataAll = () => {
    userreactive.loding = true; 
    const auth = getAuth();

    if (typePost == "login") {
      signInWithEmailAndPassword(auth, userreactive.email, userreactive.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          userreactive.loding = false;
          router.replace("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          userreactive.loding = false;
          userreactive.showAlert = true;
          userreactive.dangerAdd = true;
          userreactive.messagedangerAdd = errorMessage;
          const timer = setInterval(() => {
            if (userreactive.counter == 0) {
              userreactive.messagedangerAdd = "";
              clearInterval(timer);
              userreactive.showAlert = false;
              userreactive.counter = 10;
            }
            userreactive.counter--;
          }, 1000);
        });
    } else if (typePost == "signup") {
      createUserWithEmailAndPassword(auth, userreactive.email, userreactive.password)
        .then((userCredential) => {
          // Signed in
    
          userreactive.loding = false;
          userreactive.showAlert = true;
          userreactive.succsessAdd = true;
          userreactive.dangerAdd = false;
          userreactive.messagedangerAdd =  "تم ارسال رابط  تأكييد حسابك الى بريدك " + userreactive.email;
          const timer = setInterval(() => {
            if (userreactive.counter == 0) {
              userreactive.messagedangerAdd = "";
              clearInterval(timer);
              userreactive.showAlert = false;
              router.replace("/");
            }
            userreactive.counter--;
            userreactive.email = "";
          }, 1000);
          const lang = window.localStorage.getItem("lang");
          auth.languageCode = lang !== null ? lang : "ar";
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            // ...
            router.replace("/");
        
          });
     
        })
        .catch((error) => {
          userreactive.loding = false;
          const errorCode = error.message;

          userreactive.showAlert = true;
          userreactive.dangerAdd = true;
          userreactive.succsessAdd = false;
          userreactive.messagedangerAdd = errorCode;
          const timer = setInterval(() => {
            if (userreactive.counter == 0) {
              userreactive.messagedangerAdd = "";
              clearInterval(timer);
              userreactive.showAlert = false;
              userreactive.counter = 10;
            }
            userreactive.counter--;
          }, 1000);

          // ..
        });
    } else if (typePost == "resetpassword") {
      sendPasswordResetEmail(auth, userreactive.email)
        .then(() => {
          // Password reset email sent!
          userreactive.loding = false;  
          userreactive.showAlert = true;
          userreactive.succsessAdd = true;
          userreactive.dangerAdd = false;
         userreactive.messagedangerAdd =  "تم ارسال رابط  تغيير كلمة السر الى بريدك " + userreactive.email;
          const timer = setInterval(() => {
            if (userreactive.counter == 0) {
              userreactive.messagedangerAdd = "";
              clearInterval(timer);
              userreactive.showAlert = false;
              router.replace("/");
            }
            userreactive.counter--;
            userreactive.email = "";
          }, 1000);

          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          userreactive.loding = false;
          userreactive.showAlert = true;
          userreactive.dangerAdd = true;
          userreactive.succsessAdd = false;
          userreactive.messagedangerAdd = errorCode;
          const timer = setInterval(() => {
            if (userreactive.counter == 0) {
              userreactive.messagedangerAdd = "";
              clearInterval(timer);
              userreactive.showAlert = false;
              userreactive.counter = 10;
            }
            userreactive.counter--;
          }, 1000);
        });
    } else if(typePost == "sendEmailVerification"){

      
        const lang = window.localStorage.getItem("lang");
        auth.languageCode = lang !== null ? lang : "ar";
        
      sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        // ... 
        window.localStorage.setItem("sendEmailVerifi","true");
        userreactive.loding = false ;
        userreactive.sendEmailVerifi = "تم ارسال رابط تفعييل الحساب الى بريدك" ;
        
      });
     

     
    }
  };
  //---------------
  return {

    ...toRefs(userreactive), postDataAll ,
     showpassword,
     verifepasswosd,
     verifeemail,
     verifechackbox, 
     verifesubmit 
  
  };
}
