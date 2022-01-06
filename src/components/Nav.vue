<template>
  <!-- 
    nav bar show in mobaile
 -->
  <div id="navBorger" class="nav">
    <div>
      <router-link to="/">
        <div id="logo" @click="nav_borger_hide__click">
          <img
            v-if="$store.state.dirictionrtl"
            alt="Vue logo"
            src="../assets/logo.png"
          />
          <img
            v-if="!$store.state.dirictionrtl"
            alt="Vue logo"
            src="../assets/logo2.png"
          />
        </div>
      </router-link>
    </div>
    <div>
      <span
        @click="nav_borger_hide__click"
        class="iconuser"
        v-if="!$store.state.coockies"
      >
        <img :src="photoURLs" alt="user" />
      </span>
      <span class="icon fa-2x" @click="nav_borger_hide__click">
        <fa icon="bars"></fa>
      </span>
    </div>
  </div>

  <!-- 
    nav bar hiden in mobaile
 -->
  <div id="nav" :class="{ 'nav-borger-hide': nav_borger_hide }">
    
    <router-link class="nav-borger-hide-image" to="/">
      <div id="logo">
        <img
          v-if="$store.state.dirictionrtl"
          alt="Vue logo"
          src="../assets/logo.png"
        />
        <img
          v-if="!$store.state.dirictionrtl"
          alt="Vue logo"
          src="../assets/logo2.png"
        />
      </div>
    </router-link>

    <div class="nav-menu">
      <router-link to="/" @click="nav_borger_hide__click">{{ $store.state.Lange.vendor }}</router-link>
      <router-link to="/about" @click="nav_borger_hide__click"
        > {{ $store.state.Lange.imported }} </router-link
      >
      <router-link to="/products" @click="nav_borger_hide__click"
        > {{ $store.state.Lange.stores }}</router-link
      >
    </div>

    <div class="header__cart">
      <ul>
        <li class="search_hide" @click="hero__search__form_show">
          <label>
            <fa icon="search"></fa>
          </label>
        </li>

        <li @click="navbar_item_user_show">
          <label><fa icon="user"></fa> </label>
        </li>

        <li @click="navbar_item_globe_show">
          <label
            ><fa icon="globe"></fa>
            <span> {{ $store.state.coockeilang }} </span></label
          >
        </li>

        <li @click="navbar_item_heart_show">
          <label><fa icon="heart"></fa> <span>1</span></label>
        </li>
        <li @click="navbar_item_shopping_show">
          <label><fa icon="shopping-bag"></fa> <span>3</span></label>
        </li>
      </ul>
      <!--div class="header__cart__price">item: <span>$150.00</span></div-->
    </div>
      <!-- hero__search__form -->
    <div
      class="hero__search__form"
      :class="{ hero__search__form_hids: hero__search__form_hide }"
    >
      <form action="#" class="hero-search-form">
        <div
          @click="hero__search__down__click"
          class="hero__search__categories"
        >
          All
          <fa v-if="!hero__search__down" icon="chevron-down"></fa>
          <fa v-if="hero__search__down" icon="chevron-up"></fa>
        </div>
        <input type="text" placeholder="What do yo u need?" />
        <button type="submit" class="site-btn is-primary ">
          <span class="icon fa-lg"> <fa icon="search"></fa> </span>
        </button>
      </form>

      <div v-if="hero__search__down" class="hero__search__down">
        sdsds
        عرض اقسام البحث
      </div>
    </div>

    <nav class="navbar" role="navigation" aria-label="main navigation">

    <!-- nav link item user and auth login signup logaut link profile -->
    
      <div
        class="navbar-item has-dropdown is-hoverable  "
        :class="{ 'navbar-item-users': navbar_item_user }"
      >
        <a class="navbar-link" v-if="navbar_item_user">
          <span v-if="$store.state.coockies">
            <fa :icon="['fas', 'user']" class="fa-lg"/>
          </span>
          <span v-if="!$store.state.coockies">
            <img :src="photoURLs"  alt="M" />
          </span>
          <span class="globe-lang"> 3</span>
        </a>

        <div class="navbar-dropdown">
 
          <router-link
            v-if="$store.state.coockies" @click="nav_borger_hide__click"
            class="navbar-item"
            to="/register"
            >REGISTER</router-link
          >

          <router-link
            v-if="$store.state.coockies" @click="nav_borger_hide__click"
            class="navbar-item"
            to="/login"
            >login</router-link
          >
          <span v-if="!$store.state.coockies">
             <router-link  @click="nav_borger_hide__click" class="navbar-item" to="/profile">
              {{ displayNames }}
            </router-link>

            <a class="navbar-item">
              <span v-if="!emailVerifieds">
                <span v-if="!shackEmaileCookie">
                  <span @click="postDataAll"> تفعييل الحساب </span>

                  <span v-if="loding">loding ... </span> 
                  <span v-else>{{ sendEmailVerifi }}</span>
                </span>

                  <span v-else>
                     تم ارسال رابط التفعيل الى بريدك <br />
                          <span @click="postDataAll">اعادة ارسال رابط التفعييل </span><br/>
                          <span v-if="loding">loding ... </span> 
                          <span v-else>{{ sendEmailVerifi }}</span>
                  </span>
              </span>
              <span v-else> الحساب مفعل </span>
            </a>
          </span>

          <hr class="navbar-divider" />
          <a v-if="!$store.state.coockies" class="navbar-item" @click="logout() ,nav_borger_hide__click()">
            logout
          </a>
        </div>
      </div>
<!--fin-->
<!--nav link shange lange ar fr en -->
      <div
        class="navbar-item has-dropdown is-hoverable  "
        :class="{ 'navbar-item-globes': navbar_item_globe }"
      >
        <a class="navbar-link" v-if="navbar_item_globe" style="position:relative;">
          <fa class="icon-is-success fa-lg"  :icon="['fas', 'globe']" />

            <span class="globe-lang"> {{ $store.state.coockeilang }}</span>
        </a>

        <div class="navbar-dropdown">
          <a
            class="navbar-item"
            v-for="(ln, index) in $store.state.langs"
            :key="index"
          >
            <span @click="myshangelange(ln) , nav_borger_hide__click()">
              <fa :icon="['fas', 'language']" /> {{ ln }}
            </span>
           
          </a>
        </div>
      </div>
<!--fin...-->
 
      <div
        class="navbar-item has-dropdown is-hoverable  "
        :class="{ 'navbar-item-hearts': navbar_item_heart }"
      >
      

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About navbar-item-heartsيس سيسيسيسيسي
          </a>
          <a class="navbar-item">
            Jobs navbar-item-heartsسيسيسيسي
          </a>
        </div>
      </div>

      <div
        class="navbar-item has-dropdown is-hoverable  "
        :class="{ 'navbar-item-shoppings': navbar_item_shopping }"
      >
       

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About shopping-bag
          </a>
          <a class="navbar-item">
            Jobs shopping-bag
          </a>
        </div>
      </div>
    </nav>
    <div class="header_cart">
      <ul>
          <li >
          <label><fa icon="heart"></fa> <span>1</span></label>
        </li>
        <li >
          <label><fa icon="shopping-bag"></fa> <span>3</span></label>
        </li>
    </ul>
    </div>
  
  </div>
  <!-- 
 nav bar hiden in mobaile
 -->
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

import { getAuth, signOut } from "firebase/auth";
import getDataAuth from "../use/getAuthStateChanged.js";
import myUserStup from "../use/authsigninemailandpassword";
export default {
  name: "nave",
  setup() {
    const store = useStore();
    const navbar_item_user = ref(true);
    const navbar_item_globe = ref(true);
    const navbar_item_heart = ref(true);
    const navbar_item_shopping = ref(true);

    const nav_borger_hide = ref(true);
    const hero__search__form_hide = ref(true);
    const hero__search__down = ref(false);

    const getdataauth = getDataAuth();
    const datauser = myUserStup("sendEmailVerification");

    const myshangelange = (ln) => {
      store.commit("Changecoockeilang", ln);
    };

    const nav_borger_hide__click = () => {
      nav_borger_hide.value = nav_borger_hide.value ? false : true;
    };

    const hero__search__down__click = () => {
      hero__search__down.value = hero__search__down.value ? false : true;
    };

    //اضهار محرك البحث واخفاء اليوسر واللغة
    const hero__search__form_show = () => {
      hero__search__form_hide.value = hero__search__form_hide.value
        ? false
        : true;
      navbar_item_globe.value = true;
      navbar_item_user.value = true;
      navbar_item_heart.value = true;
      navbar_item_shopping.value = true;
    };

    //اضهار اليوزر واخفاء اللغة والبحث
    const navbar_item_user_show = () => {
      navbar_item_user.value = navbar_item_user.value ? false : true;
      navbar_item_globe.value = true;
      hero__search__form_hide.value = true;
      navbar_item_heart.value = true;
      navbar_item_shopping.value = true;
    };
    //اضهار اللغة واخفاء اليوزر و البحث
    const navbar_item_globe_show = () => {
      navbar_item_globe.value = navbar_item_globe.value ? false : true;
      navbar_item_user.value = true;
      hero__search__form_hide.value = true;
      navbar_item_heart.value = true;
      navbar_item_shopping.value = true;
    };
    //navbar-item-hearts  navbar_item_heart navbar_item_shopping

    // navbar_item_heart_show navbar_item_shopping_show
    const navbar_item_heart_show = () => {
      navbar_item_heart.value = navbar_item_heart.value ? false : true;
      navbar_item_user.value = true;
      hero__search__form_hide.value = true;
      navbar_item_globe.value = true;
      navbar_item_shopping.value = true;
    };
    // navbar_item_shopping_show  navbar_item_heart_show
    const navbar_item_shopping_show = () => {
      navbar_item_shopping.value = navbar_item_shopping.value ? false : true;
      navbar_item_user.value = true;
      hero__search__form_hide.value = true;
      navbar_item_globe.value = true;
      navbar_item_heart.value = true;
    };

    onMounted(() => {
      //------دالة المستخدم  الكوكيز الجلسة ----------
      store.getters.chackCookeiauthshanged;
      //---تشغيل دالة التشييك على المستخدم

      logoLoadtoggle();
      //nav show
      let nav = document.querySelector("#nav");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          nav.classList.add("nav-fixed");
        }
        if (window.scrollY < 200) {
          nav.classList.remove("nav-fixed");
        }
      });
      //nav show navBorger
      let navBorger = document.querySelector("#navBorger");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          navBorger.classList.add("nav-fixed");
        }
        if (window.scrollY < 200) {
          navBorger.classList.remove("nav-fixed");
        }
      });

      navBorger.addEventListener("click", () => {
        if (window.scrollY > 200) {
          window.scrollTo(0, 0);
        }
      });
    });
//------------------------------------------------------
    const logoLoadtoggle = () => {
      console.log("monted");
    };
    // دالة تسجيل الخروج من الجلسة
    const logout = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          window.localStorage.removeItem("uid");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    };
    // دالة تسجيل الخروج من الجلسة نهاية الدالة

    return {
      ...getdataauth,
      logout,
      hero__search__down,
      hero__search__form_hide,
      hero__search__form_show,
      hero__search__down__click,
      logoLoadtoggle,
      nav_borger_hide,
      nav_borger_hide__click,
      myshangelange,
      navbar_item_user,
      navbar_item_user_show,
      navbar_item_globe,
      navbar_item_globe_show,
      navbar_item_heart,
      navbar_item_shopping,
      navbar_item_heart_show,
      navbar_item_shopping_show,
      ...datauser,
    };
  },
};
</script>

<style lang="scss">

.globe-lang {
    position: absolute;
    height: 17px;
    width: 17px;
    background: #7fad39;
    font-size: 10px;
    color: #ffffff;
    line-height: 15px;
    text-align: center;
    font-weight: 700;
    display: inline-block;
    border-radius: 50%;
    /* position: absolute; */
    /* top: 0; */
    /* right: -12px; */
    top: 8px;
    right: 27px;

}


.navbar-item img {
  border-radius: 50%;
}
.buttons .button:not(:last-child):not(.is-fullwidth) {
  margin-inline-end: 0.5rem !important;
}
.navbar-link:not(.is-arrowless)::after {
  border-color: #131313 !important; /*4caf50*/
}

.search_hide {
  display: none !important;
}
.nav-fixed {
  position: fixed !important;
  top: 0px;
  left: 0px;
  right: 0px;
  transition: 0.8s ease;
}
.hero__search__down {
  position: absolute;
  top: 0px;
  left: 0px;
  background: white;
  width: 100%;
  border: 1px dotted #dedddd;
  height: 100%;
  min-height: 200px;
  z-index: 1000;
  margin-top: 60px;
  padding: 5px 20px;
}

.hero-search-form {
  display: flex;
}

.hero__search__form form button {
  position: relative !important;
  /* right: 0; */
  /* top: -1px; */
  height: 50px;
}
.hero__search__form form .hero__search__categories {
  padding-inline-start: 18px !important;
  cursor: pointer;
  min-width: 80px;
}
.hero__search__form form input {
  padding: 0 20px !important;
}

.header__cart .header__cart__price {
  font-size: 14px;
  color: #6f6f6f;
  display: inline-block;
}
.header__cart {
  padding: 0px !important;
  text-align: end;
  display: none;
  border-bottom: 1px solid #dad8d896;
}

.header__cart ul {
  display: inline-block;
  margin-inline-end: 25px;
}
.header__cart ul li {
  list-style: none;
  display: inline-block;
  margin-inline-end: 15px !important;
}
.header__cart ul li a,
.header__cart ul li label {
  position: relative;
  cursor: pointer;
}
.header__cart ul li a svg,
.header__cart ul li label svg {
  font-size: 18px;
  color: #1c1c1c;
}
.header__cart ul li a span,
.header__cart ul li label span {
  height: 13px;
  width: 13px;
  background: #7fad39;
  font-size: 10px;
  color: #ffffff;
  line-height: 13px;
  text-align: center;
  font-weight: 700;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -12px;
}
.header__cart ul li label {
  color: #2c3e50;
  padding-inline-end: 2px;
}
/***------------------------ */
.header_cart .header_cart_price {
  font-size: 14px;
  color: #6f6f6f;
  display: inline-block;
}
.header_cart {
  padding: 0px !important;
  text-align: end;
  display: block;
  
}

.header_cart ul {
  display: inline-block;
  margin-inline-end: 25px;
}
.header_cart ul li {
  list-style: none;
  display: inline-block;
  margin-inline-end: 15px !important;
}
.header_cart ul li a,
.header_cart ul li label {
  position: relative;
  cursor: pointer;
}
.header_cart ul li a svg,
.header_cart ul li label svg {
  font-size: 18px;
  color: #1c1c1c;
}
.header_cart ul li a span,
.header_cart ul li label span {
  height: 13px;
  width: 13px;
  background: #7fad39;
  font-size: 10px;
  color: #ffffff;
  line-height: 13px;
  text-align: center;
  font-weight: 700;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -12px;
}
.header_cart ul li label {
  color: #2c3e50;
  padding-inline-end: 2px;
}
@media (max-width:670px) {
    .header_cart {  display: none !important;     }
}
/*--------------------------- */
#nav {
  display: flex;
  box-shadow: 2px 1px 6px 0px rgb(0 0 11 / 17%);
  justify-content: space-between;
  min-height: 75px;
  align-items: center;
  padding: 0px;
  z-index: 10000;
  background: #fff;

  width: 100%;
}
#nav a:hover {
  color: #7fad39;
}
#nav a {
  color: #2c3e50;
  margin-inline-end: 15px;
  text-decoration: none;
}
#navBorger {
  display: none !important;
  padding: 10px 10px;
  border-bottom: 1px solid #dad8d896;
  position: relative;
  width: 100%;
  height: 75px;
  background: #f9fbfb;
  z-index: 100000;
}

#navBorger .iconuser img {
  max-height: 1.9rem;
  border-radius: 50%;
  margin-inline-end: 20px;
}
#logo img {
  width: 110px;
  height: 35px;
}
#logo {
  box-sizing: border-box;
}

@media screen and (min-width: 1024px) {
  .navbar-dropdown a.navbar-item {
    padding-inline-end: 3rem !important;
    padding-right: 1rem !important;
  }
}

@media screen and (max-width: 1024px) {
.nav-borger-hide-image{
   display: none;
}
  .navbar-item {
    border-bottom: 1px solid #ebebeb !important;
  }
  .search_hide {
    display: inline-block !important;
  }
  .hero__search__form_hids,
  .navbar-item-users,
  .navbar-item-globes,
  .navbar-item-hearts,
  .navbar-item-shoppings {
    display: none !important;
  }
  #logo img {
    margin-inline-start: -5px;
  }
  .img-zoom-item {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
  #nav {
    flex-direction: column;
    align-content: flex-start !important;
    align-items: stretch !important;
    width: 100%;
    position: absolute !important;
    margin: 0px;
    background: white;
    /*left: 0px;*/
    top: 75px;
    animation: mymove 0.1s;
  }

  @keyframes mymove {
    from {
      left: 100%;
    }
    to {
      left: 0px;
    }
  }

  #navBorger {
    display: flex !important;
  }
  #nav a {
    margin-inline-end: 0px !important;
    padding: 10px;
  }
  .nav-borger-hide {
    display: none !important;
  }
  .nav-menu {
    display: flex;
    flex-direction: column;
  }
  .nav-menu a {
    border-block-end: 1px solid #ebe8e8;
  }
  .header__cart {
    text-align: start !important;
    padding: 20px 0 20px !important;
    display: block;
  }

  .header__cart ul {
    display: flex !important;
    margin-inline-end: 25px;
    margin-inline-start: 25px;
    justify-content: space-between !important;
  }
}

/*-------- */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hero__search__form {
    width: 399px !important;
  }
  .img-zoom-lens {
    width: 150px !important;
    height: 150px !important;
  }
}
/*-------- */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hero__search__form {
    width: 300px !important;
  }
  .img-zoom-lens {
    width: 150px !important;
    height: 150px !important;
  }

}
/*-------- */
@media only screen and (min-width: 467px) and (max-width: 768px) {
}
/*--////--*/
@media only screen and (max-width: 467px) {
  .hero__search__form {
    width: 100% !important;
  }
}
</style>
