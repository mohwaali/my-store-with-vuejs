<template>
  <div>
    <button @click="add">click</button>
    {{ counter }} + 5 = {{ counters }}
    {{ arrayimoji }}
  </div>
</template>
<script>
import { ref, computed, onMounted, watch } from "vue";
export default {
  props: {
    imoji: { type: String, default: "imo" },
  },
  setup(props) {
    console.log(props.imoji);

    const counter = ref(0);
    const counters = computed(() => {
      return counter.value + 5;
    });
    const add = () => counter.value++;

    onMounted(() => {
      console.log("context");
    });

    watch(counter, (courent) => {
      if (courent === 5) console.log("clicked five pare");
    });

    const arrayimoji = computed(() => {
      return Array.from(new Array(counter.value), () => props.imoji).join(" ");
    });

    return { counter, add, counters, arrayimoji };
  },
};
</script>
<style></style>
