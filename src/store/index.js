import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
    loading: true,
    sorted: null,
  }),
  actions: {
    async fetchProducts() {
      const limit = 10;
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}`
      );
      this.products = response.data.products;
      this.loading = false;
    },
    addProduct(product) {
      product.id = `product-${this.products.length + 1}`;
      this.products.push(product);
    },
    removeProduct(productId) {
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    },
    sortProducts() {
      if (this.sorted !== "least") {
        this.products = this.products.sort((pr1, pr2) => pr1.price - pr2.price);
        this.sorted = "least";
      } else {
        this.products = this.products.sort((pr1, pr2) => pr2.price - pr1.price);
        this.sorted = "most";
      }
    },
  },
});