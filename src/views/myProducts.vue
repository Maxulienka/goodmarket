<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import productData from '@/data.json';
import Product from '@/components/myProduct.vue';

const products = ref(productData);
const filteredProducts = ref([]);
const route = useRoute();

const filterProducts = () => {
    const category = route.params.category;
    filteredProducts.value = products.value.filter(product => product.category === category);
};

// Watch for changes in the route parameters
watch(() => route.params.category, filterProducts);

// Initial filter
filterProducts();
</script>

<template>
    <div class="container"> 
        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
            <Product v-for="product in filteredProducts" :key="product.id" :product="product"/>
        </div>
    </div>
</template>