<template>
  <div class="container">
    <ProductList />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProductList from "./components/ProductList.vue";

export default defineComponent({
  components: { ProductList },
  setup() {
    return {};
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Lexend, sans-serif;
  padding: 0;
  margin: 0;
}

body {
  font-size: 18px;
  background: #101111;
  color: #bbc6ff;
}

ul {
  list-style: none;
}

.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: auto;
}

.btn {
  font-weight: 600;
  font-size: 19px;
  color: #e3e5f6;
  text-align: center;
  background: #7b86d5;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
</style>