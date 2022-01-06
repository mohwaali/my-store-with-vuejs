
  import { toRefs ,reactive} from "vue";

export default  function categoryAll(categoryParent = "Agricultur_Food.Agriculture"){

    const userreactive = reactive({

         Agricultur_Food: [],

    });

//-------------
  const categorys = () => {
 
       if (categoryParent == "Agricultur_Food.Agriculture") {
            
           $store.state.Lange.Agricultur_Food.Agriculture.forEach(element => {
        
              userreactive.Agricultur_Food.push(element);
              
           });  
   
       }  

  };

  return {
   ...toRefs(userreactive), categorys
  }

}