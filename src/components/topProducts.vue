<script setup>
import { ref, onMounted } from 'vue';
import productData from '@/data.json';
import Product from '@/components/myProduct.vue';

const selectedProducts = ref([]);

const selectRandomProducts = () => {
  const shuffled = [...productData].sort(() => 0.5 - Math.random());
  selectedProducts.value = shuffled.slice(0, 4);
};

onMounted(() => {
  selectRandomProducts();
});
</script>


<template>
    <div class="container my-5 text-center">
      <h2>Top produkty</h2>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <Product v-for="product in selectedProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </template>