<template>
<div class="d-flex justify-content-center align-items-center" style="height: 60vh;">
    <div class="text-center border rounded border-success p-4" style="width: 500px; margin-top: 20px;">
      <h1 class="mb-4">Vytvoriť účet</h1>
      <p><input type="text" class="form-control my-3" placeholder="Email" v-model="email" /></p>
      <p><input type="password" class="form-control my-3" placeholder="Password" v-model="password" /></p>
      <p v-if="errMsg" class="text-danger my-3">{{ errMsg }}</p>
      <p><button class="btn btn-outline-success w-100 my-3" @click="register">Potvrdiť</button></p>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

// Define reactive variables
const email = ref('');
const password = ref('');
const router = useRouter();

// Define the register function
const register = () => {
createUserWithEmailAndPassword(getAuth(), email.value, password.value)
.then(() => {
  console.log("Úspešne registrovaný");
  router.push('/');
})
  .catch((error) => {
    console.log(error.code);
    alert(error.message);
  });
};


</script>

<style scoped>

</style>