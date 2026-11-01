
<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { tickets } from "../data/tickets";

const route = useRoute();
const router = useRouter();

const ticket = computed(() =>
  tickets.find(
    (item) => item.id === Number(route.params.id)
  )
);
</script>

<template>
  <main>
    <button @click="router.back()">Back</button>

    <section v-if="ticket">
      <h1>{{ ticket.title }}</h1>
      <p>Ticket #{{ ticket.id }}</p>
      <p>{{ ticket.description }}</p>
      <p>Category: {{ ticket.category }}</p>
      <p>Priority: {{ ticket.priority }}</p>
      <p>Status: {{ ticket.status.replace("_", " ") }}</p>
    </section>

    <p v-else>Ticket not found.</p>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 40px auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}
</style>
