
<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { tickets } from "../data/tickets";
// import type { TicketStatus } from "../types";
import TicketList from "../components/TicketList.vue";

const router = useRouter();

const selectedStatus = ref("all");

const filteredTickets = computed(() => {
  return tickets.filter((ticket) => {
    const assignedToStaff = ticket.assignedStaffId === 2;
    const matchesStatus =
      selectedStatus.value === "all" ||
      ticket.status === selectedStatus.value;

    return assignedToStaff && matchesStatus;
  });
});

function viewTicket(ticketId: number) {
  router.push(`/tickets/${ticketId}`);
}
</script>

<template>
  <main>
    <h1>Staff Ticket Queue</h1>

    <label for="status">Filter by status: </label>

    <select id="status" v-model="selectedStatus">
      <option value="all">All statuses</option>
      <option value="open">Open</option>
      <option value="in_progress">In Progress</option>
      <option value="resolved">Resolved</option>
      <option value="closed">Closed</option>
    </select>

    <TicketList
      :tickets="filteredTickets"
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

select {
  margin: 12px 0;
  padding: 8px;
}
</style>
