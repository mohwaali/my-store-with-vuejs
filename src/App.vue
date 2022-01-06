<template>
  <div :class="{ dirrtl: dirrtls, dirltr: dirltrs }" @load="getAuthss">

    <Nav />


    <div class="category">
          <div class="nav navcategory">
                <div>

                    <a @click="showCategory"> 

                          <span class="icon-text">
                            <span class="icon">
                              <fa :icon="['fas', 'ellipsis-v']" class="fa-lg"> </fa> 
                            </span>
                            <span>{{$store.state.Lange.all }}</span>
                          </span> 
                    </a> 
                    <a><span class="icon-text">{{$store.state.Lange.offers }} </span></a> 
                    <a>  <span class="icon-text">{{$store.state.Lange.customersservice }}  </span></a>  
                </div>
                
          </div>  
          <div ref="mune" class="mune">
            <div class="columns-grid" >
              <!--column is-10------column is-10------column is-10-->
              <div ref='parentCategory' class="columns-grid-category-parent">
                  <aside class="menu"> 
                    <ul class="menu-list " ref="ulList"> 
                    <!--AgricultureFood-->
                      <li >
                          <div class="navdown">
                          <a class="">  
                          <span class="icon-text">
                               <span class="icon"><fa icon="apple-alt" ></fa>  </span>
                               <span> {{ $store.state.Lange.AgricultureFood  }}  </span>
                          </span>
                           </a> 
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('Agriculture');">
                                 <a class="">  {{ $store.state.Lange.Agriculture  }}  </a>
                            </li>
                            <li  class="tablinks" @click="openCity('Beverage');">
                                 <a class="">   {{ $store.state.Lange.Food_Beverage  }}  </a>
                           </li>
                          </ul>
                      </li> 
                    <!--ApparelTextilesAccessories Apparel Textile_LeatherProduct FashionAccessories  Timepieces_Jewelry_Eyewear-->
                       <li>
                        <div class="navdown"> 
                          <a class=""> 
                          <span class="icon-text">
                          <span class="icon"><fa icon="tshirt"></fa></span>
                          <span> {{ $store.state.Lange.ApparelTextilesAccessories  }} </span>
                          </span>
                           </a>  
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li   class="tablinks" @click="openCity('Apparel');">
                                 <a class="">   {{ $store.state.Lange.Apparel  }}  </a>
                            </li>
                            <li  class="tablinks" @click="openCity('Textile_LeatherProduct');">
                                 <a class="">  {{ $store.state.Lange.Textile_LeatherProduct  }}  </a>
                           </li>
                             <li  class="tablinks" @click="openCity('FashionAccessories');">
                                 <a class=""> {{ $store.state.Lange.FashionAccessories  }}  </a>
                           </li>
                             <li  class="tablinks" @click="openCity('Timepieces_Jewelry_Eyewear');">
                                 <a class="">  {{ $store.state.Lange.Timepieces_Jewelry_Eyewear  }}  </a>
                           </li>
                          </ul>
                      </li> 
                    <!--AutoTransportation Vehicles_Accessories-->
                     <li> 
                         <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="car"></fa>  </span>
                               <span> {{ $store.state.Lange.AutoTransportation  }}  </span>
                          </span>
                           </a>  
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('Vehicles_Accessories');">
                                 <a class="">  {{ $store.state.Lange.Vehicles_Accessories  }}  </a>
                            </li>
                          </ul>
                      </li> 
                     <!--BagsShoesAccessories Luggage_Bags_Cases Shoes_Accessories    -->
                     <li>    
                        <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="suitcase-rolling"></fa>  </span>
                               <span> {{ $store.state.Lange.BagsShoesAccessories  }}  </span>
                          </span>
                           </a>  
                          <i class="arrow down"></i>
                        </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('Luggage_Bags_Cases');">
                                 <a class="">  {{ $store.state.Lange.Luggage_Bags_Cases  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('Shoes_Accessories');">
                                 <a class="">  {{ $store.state.Lange.Shoes_Accessories  }}  </a>
                            </li>
                          </ul>
                      </li> 
                    <!--Electronics ConsumerElectronic HomeAppliance  Security_Protection -->
                     <li> 
                     <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="tv"></fa>  </span>
                               <span> {{ $store.state.Lange.ElectronicsTitle }}  </span>
                          </span>
                           </a> 
                              
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('ConsumerElectronic');">
                                 <a class="">  {{ $store.state.Lange.ConsumerElectronic  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('HomeAppliance');">
                                 <a class="">  {{ $store.state.Lange.HomeAppliance  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('Security_Protection');">
                                 <a class="">  {{ $store.state.Lange.Security_Protection  }}  </a>
                            </li> 
                          </ul>
                      </li> 
                     <!--ElectricalEquipmentComponentsTelecoms   ElectricalEquipment_Supplies   -->
                     <li> 
                      <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="plug"></fa>  </span>
                               <span> {{ $store.state.Lange.ElectricalEquipmentComponentsTelecoms }}  </span>
                          </span>
                           </a> 
                         
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('ElectricalEquipment_Supplies');">
                                 <a class="">  {{ $store.state.Lange.ElectricalEquipment_Supplies  }}  </a>
                            </li>
                           
                          </ul>
                      </li> 
                    <!--GiftsSportsToys   Sports_Entertainment Gifts_Crafts Toys_Hobbies   -->
                     <li>  
                      <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="gifts"></fa>  </span>
                               <span> {{ $store.state.Lange.GiftsSportsToys }}  </span>
                          </span>
                           </a> 
                            
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('Sports_Entertainment');">
                                 <a class="">  {{ $store.state.Lange.Sports_Entertainment  }}  </a>
                            </li>
                             <li  class="tablinks" @click="openCity('Gifts_Crafts');">
                                 <a class="">  {{ $store.state.Lange.Gifts_Crafts  }}  </a>
                            </li>
                             <li  class="tablinks" @click="openCity('Toys_Hobbies');">
                                 <a class="">  {{ $store.state.Lange.Toys_Hobbies  }}  </a>
                            </li>
                           
                          </ul>
                      </li> 

                    <!--HealthBeauty   Health_Medical  Beauty_PersonalCare -->
                     <li>  
                       <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="air-freshener"></fa>  </span>
                               <span> {{ $store.state.Lange.HealthBeauty }}  </span>
                          </span>
                           </a>
                           
                           <i class="arrow down"></i>
                         </div> 
                          <ul>
                            <li  class="tablinks" @click="openCity('Health_Medical');">
                                 <a class="">  {{ $store.state.Lange.Health_Medical  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('Beauty_PersonalCare');">
                                 <a class="">  {{ $store.state.Lange.Beauty_PersonalCare  }}  </a>
                            </li>
                           
                          </ul>
                      </li> 

                     <!--HomeLightsConstruction   Construction_RealEstate  Home_Garden Lights_Lighting Furniture -->
                     <li>  
                     <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="chair"></fa>  </span>
                               <span> {{ $store.state.Lange.HomeLightsConstruction }}  </span>
                          </span>
                           </a> 
                             
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('Construction_RealEstate');">
                                 <a class="">  {{ $store.state.Lange.Construction_RealEstate  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('Home_Garden');">
                                 <a class="">  {{ $store.state.Lange.Home_Garden  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('Lights_Lighting');">
                                 <a class="">  {{ $store.state.Lange.Lights_Lighting  }}  </a>
                            </li>
                               <li  class="tablinks" @click="openCity('Furniture');">
                                 <a class="">  {{ $store.state.Lange.Furniture  }}  </a>
                            </li> 
                          </ul>
                      </li> 
                    
                       <!--  MachineryIndustrialPartsTools  Machinery FabricationServices Tools_Hardware -->
                     <li>  
                       <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="snowplow"></fa>  </span>
                               <span> {{ $store.state.Lange.MachineryIndustrialPartsTools }}  </span>
                          </span>
                           </a> 
                           
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('Machinery');">
                                 <a class="">  {{ $store.state.Lange.Machinery  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('FabricationServices');">
                                 <a class="">  {{ $store.state.Lange.FabricationServices  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('Tools_Hardware');">
                                 <a class="">  {{ $store.state.Lange.Tools_Hardware  }}  </a>
                            </li>
                         
                          </ul>
                      </li> 
                       <!--MetallurgyChemicalsRubberPlastics  Minerals_Metallurgy Chemicals Rubber_Plastics Energy -->
                        <li>  
                        <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="flask"></fa>  </span>
                               <span> {{ $store.state.Lange.MetallurgyChemicalsRubberPlastics }}  </span>
                          </span>
                           </a> 
                         
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('Minerals_Metallurgy');">
                                 <a class="">  {{ $store.state.Lange.Minerals_Metallurgy  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('Chemicals');">
                                 <a class="">  {{ $store.state.Lange.Chemicals  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('Rubber_Plastics');">
                                 <a class="">  {{ $store.state.Lange.Rubber_Plastics  }}  </a>
                            </li>
                               <li  class="tablinks" @click="openCity('Energy');">
                                 <a class="">  {{ $store.state.Lange.Energy  }}  </a>
                            </li>
                         
                          </ul>
                      </li> 

                      
                         <!--PackagingAdvertisingOffice  Packaging_Printing Office_SchoolSupplies ServiceEquipment   -->
                        <li> 
                        <div class="navdown">
                          <a class="">  
                              <span class="icon-text">
                               <span class="icon"><fa icon="box-open"></fa>  </span>
                               <span> {{ $store.state.Lange.PackagingAdvertisingOffice }}  </span>
                          </span>
                           </a> 
                              
                           <i class="arrow down"></i>
                         </div>
                          <ul>
                            <li  class="tablinks" @click="openCity('Packaging_Printing');">
                                 <a class="">  {{ $store.state.Lange.Packaging_Printing  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('Office_SchoolSupplies');">
                                 <a class="">  {{ $store.state.Lange.Office_SchoolSupplies  }}  </a>
                            </li>
                              <li  class="tablinks" @click="openCity('ServiceEquipment');">
                                 <a class="">  {{ $store.state.Lange.ServiceEquipment  }}  </a>
                            </li>
                             
                         
                          </ul>
                      </li> 

                    </ul> 
                  </aside>
              </div>
              <!--column is-10------column is-10------column is-10-->
                <div class="columns-grid-category">
                  <!--Agriculture-->
                  <aside id="Agriculture" class="menu tabcontent" >
                  
                  <nav class="breadcrumb " aria-label="breadcrumbs">
                    <ul>
                      <li class="is-active"><a href="#" aria-current="page"><button class="delete"></button></a> </li> 
                      <li class="is-active"><a href="#" aria-current="page">{{ $store.state.Lange.AgricultureFood  }} </a></li> 
                      <li class="is-active"><a href="#" aria-current="page">{{ $store.state.Lange.Agriculture  }} </a></li>
                    </ul>
                  </nav>
                  <ul class="menu-list flexulli">
 
                       <li v-for="(Agriculture , index) in $store.state.Lange.Agricultur_Food.Agriculture " :key="index">
                         <a>{{ Agriculture }}</a>
                     </li>
                       
                  </ul>
                  </aside>
                  <!--Beverage-->
                  <aside id="Beverage" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(Beverage , index) in $store.state.Lange.Agricultur_Food.Food_Beverage " :key="index">
                            <a>{{ Beverage }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                <!--Apparel Textile_LeatherProduct FashionAccessories  Timepieces_Jewelry_Eyewear-->
                  <aside id="Apparel" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(Apparel , index) in $store.state.Lange.Apparel_Textiles_Accessories.Apparel " :key="index">
                            <a>{{ Apparel }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                <!--Apparel Textile_LeatherProduct FashionAccessories  Timepieces_Jewelry_Eyewear-->
                  <aside id="Textile_LeatherProduct" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(Textile_LeatherProduct , index) in $store.state.Lange.Apparel_Textiles_Accessories.Textile_LeatherProduct " :key="index">
                            <a>{{ Textile_LeatherProduct }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                  <!--Apparel Textile_LeatherProduct FashionAccessories  Timepieces_Jewelry_Eyewear-->
                  <aside id="FashionAccessories" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(FashionAccessories , index) in $store.state.Lange.Apparel_Textiles_Accessories.FashionAccessories " :key="index">
                            <a>{{ FashionAccessories }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                <!--Apparel Textile_LeatherProduct FashionAccessories  Timepieces_Jewelry_Eyewear-->
                  <aside id="Timepieces_Jewelry_Eyewear" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(Timepieces_Jewelry_Eyewear , index) in $store.state.Lange.Apparel_Textiles_Accessories.Timepieces_Jewelry_Eyewear " :key="index">
                            <a>{{ Timepieces_Jewelry_Eyewear }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                 <!--Vehicles_Accessories-->
                  <aside id="Vehicles_Accessories" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(Vehicles_Accessories , index) in $store.state.Lange.Auto_Transportation.Vehicles_Accessories " :key="index">
                            <a>{{ Vehicles_Accessories }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                <!--Bags_Shoes_Accessories Luggage_Bags_Cases  -->
                  <aside id="Luggage_Bags_Cases" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(Luggage_Bags_Cases , index) in $store.state.Lange.Bags_Shoes_Accessories.Luggage_Bags_Cases " :key="index">
                            <a>{{ Luggage_Bags_Cases }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                <!--Bags_Shoes_Accessories   Shoes_Accessories-->
                  <aside id="Shoes_Accessories" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(Shoes_Accessories , index) in $store.state.Lange.Bags_Shoes_Accessories.Shoes_Accessories " :key="index">
                            <a>{{ Shoes_Accessories }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                <!--ConsumerElectronic   ConsumerElectronic-->
                  <aside id="ConsumerElectronic" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(ConsumerElectronic , index) in $store.state.Lange.Electronics.ConsumerElectronic " :key="index">
                            <a>{{ ConsumerElectronic }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                <!--HomeAppliance   HomeAppliance-->
                  <aside id="HomeAppliance" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(HomeAppliance , index) in $store.state.Lange.Electronics.HomeAppliance " :key="index">
                            <a>{{ HomeAppliance }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                    <!--HomeAppliance   HomeAppliance-->
                  <aside id="Security_Protection" class="menu tabcontent">
                  <ul><li><button class="delete"></button> </li></ul>
                  <ul class="menu-list flexulli">
  
                          <li v-for="(Security_Protection , index) in $store.state.Lange.Electronics.Security_Protection " :key="index">
                            <a>{{ Security_Protection }}</a>
                          </li>
                    
                  </ul>
                  </aside>
                  
                  
            
              </div>

            </div> 
         </div> 

    </div>

          
    <router-view />
    <Footer />
   

  
  </div>
</template>

<script>
//---------------------------------
 


import Footer from "@/components/footer.vue";
import Nav from "@/components/Nav.vue";
import { useStore } from "vuex";
import {ref , computed, onMounted    } from "vue"; 
 
 
export default {
  setup() {
    const mune = ref(null);
     const   ulList  = ref(null);
    const parentCategory = ref(null);
    const store   = useStore();
    const dirrtls = computed(() => store.state.dirictionrtl);
    const dirltrs = computed(() => store.state.dirictionltr);
    
    onMounted(() => {
      //---تشغيل دالة تغيير اللغة والمسار
      ChangecoockeilangStore(); 
      //------------------
      const ullists = ulList.value;
            const childullist = ullists.children;
            childullist.forEach(element => {
               
                element.addEventListener("click" , () =>{
                      element.lastElementChild.classList.toggle("ullistshow");
                });
            });
            // ullists.classList.toggle("muneshows");
    });
    
    //--- دالة تغيير اللغة والمسار
    const ChangecoockeilangStore = () => {
      //جلب اللغة من الكوكيز
      let lang = getCookies("lang");
      //تششييك هل يوجد قيمة في الكوكيز
      if (lang != "") {
        store.state.coockeilang = lang;
 
          // تغيير اللغة الى النجليزية
          store.commit("shangeLangedir", lang);
          store.commit("shangeLangedata", lang); 
        
      }
    };
    const getCookies = (cname) => {
      if (typeof Storage != undefined) {
        return localStorage.getItem(cname);
      } else {
        let name = cname + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    };
    //bla
    const openCity = (cityName) => {
        var i, tabcontent  ;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        
      const muoseovers =  document.getElementById(cityName) ;
            muoseovers.style.display = "block";

      muoseovers.addEventListener("click",()=>{
         for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      });
   
    };
       //-------------------------------------------------------
      const showCategory = () => {
           
          const element = parentCategory.value ; 
          element.classList.toggle("muneshow"); 
          const elementmune = mune.value ; 
          elementmune.classList.toggle("muneshows"); 
 
      };
    //-----------category-parent-toggle-------------
    
    return {
      dirrtls, 
      dirltrs,  
      ChangecoockeilangStore,
      getCookies ,openCity,showCategory,mune,parentCategory,ulList 
    };
  },
 
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "cairo";
  src: local("cairo"), url(./fonts/cairo/Cairo-Regular.ttf) format("truetype");
}
.flexulli{
  
    display: grid;
    grid-template-columns: repeat(4,1fr);

}
@media (max-width: 760px){.flexulli{grid-template-columns: repeat(1,1fr);}} 
.flexullicat {
    position: absolute;
    top: 75px;
    width: 100%;
    height: 100vh;
    background: white;
    overflow: scroll;
    z-index: 100;
}
.tabcontent { 
   display: none; 
   height: calc(100vh - 120px);padding: 20px;
   overflow-y: scroll;
}
#Agriculture{
    background: radial-gradient(#f588d8, #c0a3e5);
    background: linear-gradient( 92.4deg,
     /* #1F3D83*//*#1F3D83*/#fdecef 8.16%, 
     /* #00A7DA*//*#00A7DA*/#fde8ec 37.71%, 
      /*#00C897*//*#00C897*/#f8cfd6 64.19%,
      /*#1BA94C*//*#1BA94C*/#fbc1cc 87.62%, 
     /* #068932*//*#068932*/#fa99b2 99.34%);
  background-image: url("./assets/img/featured/feature-8.jpg");
  background-repeat: no-repeat;
  background-position: left bottom; 
   
}
#Beverage{
    background: radial-gradient(#f588d8, #c0a3e5);
    background: linear-gradient( 92.4deg,
     /* #1F3D83*//*#1F3D83*/#c4fde9 8.16%, 
     /* #00A7DA*//*#00A7DA*/#c4fde9 37.71%, 
      /*#00C897*//*#00C897*/#81f7cd 64.19%,
      /*#1BA94C*//*#1BA94C*/#60efbc 87.62%, 
     /* #068932*//*#068932*/#58d5c9 99.34%);
}
 
.category{
    position: relative;
    width: 100%;
    height: 100%; 
}
 .mune{ 
    position: absolute;
    width: 0px;
    height: calc(100vh - 120px);
    z-index: 1000; 
    top: 43px;
    content-visibility: auto; 
    transition: 0.3s; 
 }
 .columns-grid-category-parent {
   width: 0px; height: calc(100vh - 120px); overflow-y: scroll; 
   content-visibility: auto;
   background: #f3f6fb;
   box-shadow: 1px 3px 11px 1px #bfbfc7; 
   transition: 0.3s;  
   z-index: 2;padding: 0 1em;
}

.muneshow{
       
     width: 350px;
       
} 
.muneshows{
     width: 100%;  
} 
.menu {
      font-size: 0.8rem!important; 
}
 
.navcategory {
   background: #fff;
    min-height: 40px;height: auto;
    font-weight: 900;
    box-shadow: 0px 0px 6px 2px #e4e4eb;
    padding-inline-start: 5px;
    max-width: 1380px;
}
.navcategory  a{
    padding-inline-end: 15px;
}
.columns-grid-category{
  position: absolute; 
  background: #fff;
  
  width: 100%;
  top:0px;
  padding: 0 20px;
  
}
.navdown{
    display: flex;
    /* grid-template-columns: repeat(2,1fr); */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
.arrow { 
  border: solid #7fad39;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
 
.menu-list a:hover ,.menu-list svg:hover{
  color:#7fad39 !important
}
.menu-list a:hover  svg  {
  color:#7fad39 !important
}
.menu-list li ul a:hover {
    background-color: #dfe5de;
     color:#7fad39 !important
}
.menu-list li ul{
  display:none;
}
.ullistshow {
   display:block!important;
}

.menu-list li a span svg  {
   color:#7fad39;
}
.menu-list .navdown .icon {
    position: relative;
    background:  #dfe5de;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    /* border: 2px solid #7fad39; */
     padding: 15px;  
    margin-inline-end: 10px;
}
 .breadcrumb li:first-child a {
     padding-left: 0.75em!important;  
}

#app {
  /*#2c3e50 font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;*/
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #7fad39 !important;
    }
  }
}

.menu-list li ul {
    border-inline-start: 1px solid #dbdbdb !important; 
    padding-inline-start: 0.75em!important; 
}
</style>
