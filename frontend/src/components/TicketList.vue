
<script setup lang="ts">
import type { Ticket } from "../types";
import TicketRow from "./TicketRow.vue";

defineProps<{
  tickets: Ticket[];
}>();

defineEmits<{
  view: [ticketId: number];
}>();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      <TicketRow
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
        @view="$emit('view', $event)"
      />
    </tbody>
  </table>

  <p v-if="tickets.length === 0">
    No tickets found.
  </p>
</template>
