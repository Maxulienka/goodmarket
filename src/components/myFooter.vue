<template>
  <div class="container-fluid bg-light">
    <footer class="py-5">
      <div class="row text-center text-md-left">
        <div class="col-12 col-md-4 mb-4">
          <h5>Všeobecné informácie</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/about">O nás</router-link></li>
            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/terms-and-conditions">Obchodné podmienky</router-link></li>
            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/gdpr">Ochrana osobných údajov</router-link></li>
          </ul>
        </div>
  
        <div class="col-12 col-md-4 mb-4">
          <h5>Pre farmárov</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/direct-sales">Predaj z dvora</router-link></li>
            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/comapnies">Pre firmy</router-link></li>
            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/gardeners">Pre záhradkárov</router-link></li>
          </ul>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <h5>Prevádzkovateľ</h5>
          <ul class="nav flex-column">
            <p class="mb-2 text-muted">Dobrý Trh s.r.o</p>
            <p class="mb-2 text-muted">Jedlikova 1</p>
            <p class="mb-2 text-muted">811 06 Bratislava</p>
          </ul>
        </div>
      </div>
  
      <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center py-4 my-4 border-top">
      <p class="text-center m-0">&copy; 2024 Dobrý Trh s.r.o, Všetky práva vyhradené.</p>
    </div>
    </footer>
  </div>
  </template>