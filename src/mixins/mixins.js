export default{

    data() {
        return {
          up: {
            email: "",
            password: "",
          }, 
          counter: 5,
          hide: false,
          successUsername: false,
          errorUsername: false,
          successMessageuser: "",
          successMessage: "",
          errorMessage: "",
          isSuccess: false,
          isDanger: false,
          showSuccess: false,
          showDanger: false,
          messagealert: "",
          disabled: true,
          showSuccessemail: false,
          login: "الذهاب الى صفحة تسجيل الدخول",
          checkbox: false,
          successPass: false,
          p: {
            successPasschar8: false,
            successPasslower: false,
            successPassnum: false,
            successPassuper: false,
            successPasschars: false,
          },
          dangerPass: false,
          showeye: false,
          showeyeslash: true,
          typpassword: "password",
          submit: false,
          msgAdd: {
            showAlert: false,
            dangerAdd: false,
            succsessAdd: false,
            messagesuccessAdd: [],
            messagedangerAdd: [],
          },
          showemaillogin: false,
          showusernamelogin: true,
          hello: "",
        };
      },
      methods: {
       
        verifechackbox: function() {
          this.checkbox = this.checkbox ? false : true;
          this.verifesubmit();
        },
        verifesubmit: function() {
          if (this.successPass && this.isSuccess && this.checkbox)
            this.disabled = false;
          else this.disabled = true;
        },
        verifeemail: function() {
          //const str = this.up.email;
          const str = this.email ? this.email:this.up.email ;
          const regex = /^([._a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
          const regexo = /^([._a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}\.([a-zA-Z]){2,3}$/;
    
          if (regex.test(str) || regexo.test(str)) {
            this.isDanger = false;
            this.isSuccess = true;
            this.messagealert = "";
            this.showDanger = false;
          } else {
            this.isSuccess = false;
            if (str != "") {
              this.isDanger = true;
              this.messagealert = "هذا ليس بريد اليكتروني";
              this.showDanger = true;
              this.showSuccess = false;
              this.showSuccessemail = false;
            } else {
              this.messagealert = "هذا الحقل اجباري لا يقبل قيمة فارغة";
              this.showSuccess = false;
            }
          }
          this.verifesubmit();
        },
        verifepasswosd: function() {
          const str = this.up.password;
    
          const lowerCase = new RegExp("(?=.*[a-z])");
          const upperCase = new RegExp("(?=.*[A-Z])");
          const Numbers = new RegExp("(?=.*[0-9])");
          const SpecialChar = new RegExp("(?=.*[!@#$%^&*])");
          const eightChar = new RegExp("(?=.{8})");
    
          if (eightChar.test(str)) {
            this.p.successPasschar8 = true;
          } else {
            this.p.successPasschar8 = false;
          }
          if (SpecialChar.test(str)) {
            this.p.successPasschars = true;
          } else {
            this.p.successPasschars = false;
          }
          if (Numbers.test(str)) {
            this.p.successPassnum = true;
          } else {
            this.p.successPassnum = false;
          }
          if (lowerCase.test(str)) {
            this.p.successPasslower = true;
          } else {
            this.p.successPasslower = false;
          }
          if (upperCase.test(str)) {
            this.p.successPassuper = true;
          } else {
            this.p.successPassuper = false;
          }
    
          if (
            eightChar.test(str) &&
            SpecialChar.test(str) &&
            Numbers.test(str) &&
            lowerCase.test(str) &&
            upperCase.test(str)
          ) {
            this.successPass = true;
            this.dangerPass = false;
          } else {
            this.successPass = false;
            this.dangerPass = true;
          }
          this.verifesubmit();
        },
        showpassword: function() {
          this.showeye = this.showeye ? false : true;
          this.showeyeslash = this.showeyeslash ? false : true;
          this.typpassword = this.typpassword == "password" ? "text" : "password";
        },
      },
}