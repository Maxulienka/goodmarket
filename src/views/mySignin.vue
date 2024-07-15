<template>
<div class="d-flex justify-content-center align-items-center" style="height: 60vh;">
    <div class="text-center border border-success rounded p-4" style="width: 500px; margin-top: 20px;">
      <h1 class="mb-4">Prihlásiť sa</h1>
      <p><input type="text" class="form-control my-3" placeholder="Email" v-model="email" /></p>
      <p><input type="password" class="form-control my-3" placeholder="Password" v-model="password" /></p>
      <p v-if="errMsg" class="text-danger my-3">{{ errMsg }}</p>
      <p><button class="btn btn-outline-success w-100 my-3" @click="register">Prihlásiť</button></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

// Define reactive variables
const email = ref('');
const password = ref('');
const errMsg = ref();
const router = useRouter();

// Define the register function
const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
  .then(() => {
    console.log("Úspešne prihlásený");
    router.push('/');
  })
  .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
            errMsg.value = "Email neexistuje";
            break;
        case "auth/user-not-found":
            errMsg.value = "Email sa nenašiel"; 
            break;
        case "auth/wrong-password":
            errMsg.value = "Nesprávne heslo";
            break;
        case "auth/email-already-in-use":
            errMsg.value = "Email sa uz použiva";
            break;
        default:
            errMsg.value = "Nesprávne heslo alebo email";
            break;
      }
    });
};

</script>

<style scoped>

</style>