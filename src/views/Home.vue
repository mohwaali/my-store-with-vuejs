<template>
 
  <Products/>
  

</template>

<script>
// @ is an alias to /src

import Products from "@/components/products/products.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {  
    Products 
  },
  setup() {
    const items = ref([
      { name: "mohamed", age: 45, deploment: "php ind html css ..." },
      { name: "ali", age: 36, deploment: "css" },
      { name: "ahmed", age: 43, deploment: "javascript" },
      { name: "aissa", age: 46, deploment: "python" },
    ]);

    return { items };
  },
};
</script>
