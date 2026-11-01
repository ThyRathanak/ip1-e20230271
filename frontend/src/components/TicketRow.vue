
<script setup lang="ts">
import type { Ticket } from "../types";

defineProps<{
  ticket: Ticket;
}>();

defineEmits<{
  view: [ticketId: number];
}>();
</script>

<template>
  <tr>
    <td>#{{ ticket.id }}</td>
    <td>{{ ticket.title }}</td>
    <td>{{ ticket.priority }}</td>
    <td>{{ ticket.status.replace("_", " ") }}</td>
    <td>
      <button @click="$emit('view', ticket.id)">
        View
      </button>
    </td>
  </tr>
</template>
