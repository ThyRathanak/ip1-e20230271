
<script setup lang="ts">
import {RouterView } from "vue-router";
</script>

<template>
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
