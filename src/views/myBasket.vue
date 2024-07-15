<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 60vh;">
      <div class="text-center border border-success rounded p-5" style="max-width: 600px;">
        <h1 class="mb-4">Nákupný košík</h1>
        <p class="lead mb-4">Máte 0 položiek v košíku.</p>
        <router-link to="/" class="btn btn-outline-success w-100">Ďalej nakupovať</router-link>
      </div>
    </div>
  </template>

  <script setup>
  </script>

  <style scoped>
  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }
  </style>