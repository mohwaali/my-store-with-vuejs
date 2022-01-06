<template>
   
  <Zoomimage />
   
</template>
<script>
import Zoomimage from "@/components/ZoomImage.vue";
 
import { ref } from "vue";
export default {
  name: "products",
  components: {
    Zoomimage,
    
  },
  setup() {
    const imoji = ref("mohamed");
    return { imoji };
  },
};

 
</script>
<style></style>
