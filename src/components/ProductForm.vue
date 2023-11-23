<template>
  <form @submit.prevent="handleSubmit">
    <h2>Create new product</h2>
    <div class="inputs-container">
      <div class="input-field">
        <label for="title">Titel:</label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div class="input-field">
        <label for="price">Price:</label>
        <input id="price" type="number" v-model="price" />
      </div>
      <button type="submit" class="btn">Submit</button>
      <span v-if="error" class="error">
        You have to fill all the fields of the form.
      </span>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["product-added"],
  setup(_, { emit }) {
    const title = ref("");
    const price = ref("");
    const error = ref(false);

    const handleSubmit = () => {
      if (title.value && price.value) {
        emit("product-added", {
          title: title.value,
          price: Number(price.value),
        });
        title.value = "";
        price.value = "";
        error.value = false;
      } else {
        error.value = true;
      }
    };

    return {
      title,
      price,
      error,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
form {
  background: #a3acee3b;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 20px 30px;
  margin: auto;
}

.inputs-container {
  display: grid;
  padding: 25px 0 10px;
  gap: 15px;
}

.input-field {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, auto);
  gap: 10px;
}

.input-field input {
  font-size: 16px;
  color: #d5daff;
  background: #a3acee26;
  border: 1px solid #a3acee6e;
  border-radius: 8px;
  padding: 4px 8px;
}

.error {
  font-size: 14px;
  color: #d57b9b;
}

.btn:hover {
  transform: scale(1.02);
  background: #7391d2;
}

@media (min-width: 555px) {
  form {
    margin: 0;
  }
}
</style>