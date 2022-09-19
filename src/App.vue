<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">BiblioInfo</RouterLink>
      <RouterLink to="/cadlivros">Cadastro de Livros</RouterLink>
      <RouterLink to="/cadautores">Cadastro de Autores</RouterLink>
      <RouterLink to="/cadeditoras">Cadastro de Editoras</RouterLink>
      <RouterLink to="/cadcategorias">Cadastro de Categorias</RouterLink>
      
    </nav> 
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 2vh;
  padding: 1vh;
  box-shadow: 1px 1px 5px black;
  font-family: 'Montserrat', sans-serif;
}
a,
.green {
  text-decoration: none;
  color: #FFFF;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(308, 100%, 37%, 0.2);
  }
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
