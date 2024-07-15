<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
const router = useRouter();

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

const handleSignOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">Dobrý Trh</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
        <ul class="navbar-nav mx-auto text-center">
          <li class="nav-item mx-2">
            <router-link class="nav-link text-uppercase text-light fw-semibold" to="/category/meat" active-class="active-link">Mäso</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link text-uppercase text-light fw-semibold" to="/category/vegetable" active-class="active-link">Zelenina</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link text-uppercase text-light fw-semibold" to="/category/fruit" active-class="active-link">Ovocie</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link text-uppercase text-light fw-semibold" to="/category/milk-products" active-class="active-link">Mliečne výrobky</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link text-uppercase text-light fw-semibold" to="/category/honey" active-class="active-link">Med</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link text-uppercase text-light fw-semibold" to="/category/eggs" active-class="active-link">Vajíčka</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center ms-auto">
          <div class="dropdown me-3">
            <button class="btn btn-outline-light border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-user"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <li v-if="!isLoggedIn"><router-link class="dropdown-item" to="/sign-in">Prihlásiť sa</router-link></li>
              <li v-if="!isLoggedIn"><router-link class="dropdown-item" to="/register">Registrovať</router-link></li>
              <li v-if="isLoggedIn"><button class="dropdown-item" @click="handleSignOut">Odhlásiť sa</button></li>
            </ul>
          </div>
          <router-link to="/basket" class="btn btn-outline-light border-0">
            <i class="fa-solid fa-basket-shopping"></i>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-nav {
  flex: 1;
  justify-content: center;
}

.active-link {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}
</style>
