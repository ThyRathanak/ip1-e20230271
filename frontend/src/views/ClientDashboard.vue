
<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { tickets as initialTickets } from "../data/tickets";
import type { Ticket } from "../types";
import TicketList from "../components/TicketList.vue";

const router = useRouter();
const clientId = 1;

const myTickets = ref<Ticket[]>(
  initialTickets.filter(
    (ticket) => ticket.clientId === clientId
  )
);

const openCount = computed(
  () =>
    myTickets.value.filter(
      (ticket) =>
        ticket.status === "open" ||
        ticket.status === "in_progress"
    ).length
);

const resolvedCount = computed(
  () =>
    myTickets.value.filter(
      (ticket) => ticket.status === "resolved"
    ).length
);

function viewTicket(ticketId: number) {
  router.push(`/tickets/${ticketId}`);
}
</script>

<template>
  <main>
    <h1>Client Dashboard</h1>
    <p>Welcome back, Dara Sok.</p>

    <section class="summary">
      <article>
        <h2>{{ openCount }}</h2>
        <p>Open / In Progress</p>
      </article>

      <article>
        <h2>{{ resolvedCount }}</h2>
        <p>Resolved Tickets</p>
      </article>
    </section>

    <h2>My Tickets</h2>

    <button @click="router.push('/tickets/new')">
      Create Ticket
    </button>

    <TicketList
      :tickets="myTickets"
      @view="viewTicket"
    />
  </main>
</template>

<style scoped>
main {
  max-width: 1100px;
  margin: 40px auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.summary {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 24px 0;
}

.summary article {
  flex: 1;
  min-width: 180px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th,
td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>
