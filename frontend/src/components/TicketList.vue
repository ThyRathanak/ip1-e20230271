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
  <div class="ticket-list-wrapper">
    <div v-if="tickets.length > 0" class="table-responsive">
      <table class="tickets-table">
        <thead>
          <tr>
            <th>TICKET ID</th>
            <th>TITLE / SUBJECT</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
            <th class="action-col">ACTION</th>
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
    </div>

    <!-- Enhanced Empty State -->
    <div v-else class="empty-state">
      <span class="empty-icon">📭</span>
      <p class="empty-text">No tickets found.</p>
      <span class="empty-subtext">You have no active support tickets at the moment.</span>
    </div>
  </div>
</template>

<style scoped>
.ticket-list-wrapper {
  width: 100%;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

.tickets-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.tickets-table th {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 700;
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  background-color: #f8fafc;
  letter-spacing: 0.05em;
}

.tickets-table th.action-col {
  text-align: right;
  padding-right: 24px;
}

/* Row transition and hover styling */
:deep(tr) {
  transition: background-color 0.15s ease;
}

:deep(tr:hover) {
  background-color: #f8fafc;
}

:deep(td) {
  padding: 14px 16px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.85rem;
  color: #1e293b;
  vertical-align: middle;
}

/* Empty State Styles */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  text-align: center;
  background-color: #f8fafc;
  border-radius: 8px;
  border: 1px dashed #cbd5e1;
  margin-top: 12px;
}

.empty-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.empty-text {
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
}

.empty-subtext {
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 4px;
}
</style>