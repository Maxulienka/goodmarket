<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    product: Object
});

const imageSrc = computed(() => {
  return require(`@/assets/${props.product.image}`);
});
</script>

<template>
    <div class="col">
        <div class="card text-center mb-4 shadow-sm border-0 hover-card" style="max-width: 320px; margin: auto;">
    <img :src="imageSrc" class="card-img-top" alt="..." style="width: 90%; margin: auto; margin-top: 10px; border-radius: 10px;">
    <div class="card-body">
      <h5 class="card-title fw-bold">{{ product.title }}</h5>
      <p class="card-text fw-bold text-secondary">{{ product.supplier }}</p>
      <p class="card-text mb-0">{{ product.price }} Eur / <span>{{ product.quantity }}</span></p>
    </div>
    <div class="mb-2 d-flex justify-content-center">
      <button class="btn btn-outline-success w-75">Kúpiť</button>
    </div>
  </div>
    </div>
</template>

<style scoped>
.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.hover-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>