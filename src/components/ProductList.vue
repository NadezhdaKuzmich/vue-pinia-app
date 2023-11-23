<template>
  <section class="main-content">
    <h1>Getting Started with Pinia State Management in Vue 3</h1>
    <div class="content" v-if="!productStore.loading">
      <div class="panel">
        <ProductForm @product-added="addProduct" />
        <button @click="sortProducts" class="btn">Sort by price</button>
      </div>
      <ul class="product-list" v-if="productStore.products.length">
        <li v-for="product in productStore.products" :key="product.id">
          {{ product.title }} - {{ product.price }} $
          <button class="btn-close" @click="removeProduct(product.id)">
            &#x00d7;
          </button>
        </li>
      </ul>
      <div class="empty" v-else>
        <img src="../assets/empty.png" alt="Empty folder" />
        <p>Your product list is empty</p>
      </div>
    </div>
    <Loader v-else />
  </section>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import Loader from "@/components/Loader.vue";
import { useProductStore } from "@/store";
import ProductForm from "./ProductForm.vue";

export default defineComponent({
  components: { Loader, ProductForm },
  setup() {
    const productStore = useProductStore();

    onMounted(() => {
      fetchProducts();
    });

    const fetchProducts = () => {
      productStore.fetchProducts();
    };
    const addProduct = (product) => {
      productStore.addProduct(product);
    };
    const removeProduct = (productId) => {
      productStore.removeProduct(productId);
    };
    const sortProducts = () => {
      productStore.sortProducts();
    };

    return {
      productStore,
      addProduct,
      removeProduct,
      sortProducts,
    };
  },
});
</script>

<style scoped>
.main-content {
  text-align: center;
  padding: 40px 0 0;
}
.panel {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  padding: 40px 0;
  gap: 40px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.product-list li {
  position: relative;
  display: grid;
  width: 100%;
  max-height: 200px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  text-align: center;
  background: #7b86d529;
  border: 4px solid #737699;
  border-radius: 8px;
  padding: 20px;
  gap: 20px;
}

.btn-close {
  position: absolute;
  top: 2px;
  right: 10px;
  font-size: 20px;
  color: #e3e5f6;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.5s ease;
}

.btn-close:hover {
  color: #d57b9b;
}

.btn {
  position: relative;
  background: none;
  padding: 0;
}

.btn::after {
  content: "\2195";
  vertical-align: middle;
  margin: 6px;
}

.btn:hover {
  color: #a6aeec;
}

.empty {
  color: #bbc6fe85;
  padding: 100px 0;
}

.empty img {
  max-width: 115px;
}

@media (min-width: 500px) {
  .product-list li {
    width: calc(100% / 2 - 15px);
  }
}

@media (min-width: 768px) {
  .product-list li {
    width: calc(100% / 3 - 20px);
  }
}
</style>