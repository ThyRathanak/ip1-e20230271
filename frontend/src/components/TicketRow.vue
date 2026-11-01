<script setup lang="ts">
import type { Ticket } from "../types";

defineProps<{
  ticket: Ticket;
}>();

defineEmits<{
  view: [ticketId: number];
}>();

// Helper function to format priority classes for styling
function getPriorityClass(priority: string) {
  return priority.toLowerCase();
}

// Helper function to format status classes for styling
function getStatusClass(status: string) {
  return status.toLowerCase().replace(/\s+/g, '_');
}
</script>

<template>
  <tr class="ticket-row">
    <td class="ticket-id">#{{ ticket.id }}</td>
    <td class="ticket-subject-cell">
      <div class="ticket-title">{{ ticket.title }}</div>
      <!-- Optional subtext if your ticket object has a category/location property -->
      <div v-if="ticket.category" class="ticket-meta">{{ ticket.category }}</div>
    </td>
    <td>
      <span :class="['tag-priority', getPriorityClass(ticket.priority)]">
        • {{ ticket.priority }}
      </span>
    </td>
    <td>
      <span :class="['tag-status', getStatusClass(ticket.status)]">
        {{ ticket.status.replace("_", " ") }}
      </span>
    </td>
    <td class="action-cell">
      <button class="action-link-btn" @click="$emit('view', ticket.id)">
        View Details ↗
      </button>
    </td>
  </tr>
</template>

<style scoped>
.ticket-row {
  transition: background-color 0.15s ease;
}

.ticket-row:hover {
  background-color: #f8fafc;
}

td {
  padding: 14px 16px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.85rem;
  color: #1e293b;
  vertical-align: middle;
}

.ticket-id {
  color: #4f46e5;
  font-weight: 600;
}

.ticket-title {
  font-weight: 600;
  color: #0f172a;
}

.ticket-meta {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 2px;
}

/* Priority Badges */
.tag-priority {
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: capitalize;
  display: inline-block;
}

.tag-priority.high {
  background: #fee2e2;
  color: #dc2626;
}

.tag-priority.medium {
  background: #ffedd5;
  color: #c2410c;
}

.tag-priority.low {
  background: #f1f5f9;
  color: #475569;
}

/* Status Badges */
.tag-status {
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: capitalize;
  display: inline-block;
}

.tag-status.open {
  background: #dbeafe;
  color: #2563eb;
}

.tag-status.in_progress {
  background: #ffedd5;
  color: #c2410c;
}

.tag-status.resolved {
  background: #e0e7ff;
  color: #4338ca;
}

/* Action Link Styling */
.action-cell {
  text-align: right;
  padding-right: 24px;
}

.action-link-btn {
  background: none;
  border: none;
  color: #4f46e5;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s;
}

.action-link-btn:hover {
  opacity: 0.8;
  text-decoration: underline;
}
</style>