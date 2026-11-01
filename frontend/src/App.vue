
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <header>
    <nav>
      <RouterLink to="/client">Client Dashboard</RouterLink>
      <RouterLink to="/staff/tickets">Staff Queue</RouterLink>
    </nav>
  </header> -->

  <RouterView />
</template>

<style>
body {
  margin: 0;
  color: #222;
  background: #f8fafc;
  font-family: Arial, sans-serif;
}

nav {
  display: flex;
  gap: 24px;
  padding: 18px 24px;
  background: white;
  border-bottom: 1px solid #ddd;
}

nav a {
  color: #334155;
  text-decoration: none;
}
</style>
