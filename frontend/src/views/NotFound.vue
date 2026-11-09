
<template>
  <main class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <RouterLink to="/client/dashboard">Back to Dashboard</RouterLink>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

h1 {
  font-size: 72px;
  margin: 0;
  color: #334155;
}

a {
  color: #2563eb;
  text-decoration: none;
}
</style>
