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

// Helper functions for matching badge styles
function getPriorityClass(priority: string) {
  return priority ? priority.toLowerCase() : '';
}

function getStatusClass(status: string) {
  return status ? status.toLowerCase().replace(/\s+/g, '_') : '';
}
</script>

<template>
  <div class="ticket-detail-layout">
    <main class="main-container">
      <!-- Back Navigation Bar -->
      <div class="nav-bar">
        <button class="btn-back" @click="router.back()">
          ← Back to Dashboard
        </button>
      </div>

      <!-- Ticket Details Card -->
      <section v-if="ticket" class="ticket-card">
        <div class="ticket-header-row">
          <div>
            <span class="ticket-id-badge">Ticket #{{ ticket.id }}</span>
            <h1>{{ ticket.title }}</h1>
          </div>
          <div class="ticket-badges">
            <span :class="['tag-priority', getPriorityClass(ticket.priority)]">
              • {{ ticket.priority }}
            </span>
            <span :class="['tag-status', getStatusClass(ticket.status)]">
              {{ ticket.status.replace("_", " ") }}
            </span>
          </div>
        </div>

        <div class="ticket-meta-grid">
          <div class="meta-item">
            <span class="meta-label">Category</span>
            <span class="meta-value">{{ ticket.category || 'General' }}</span>
          </div>
        </div>

        <div class="ticket-description-box">
          <h3>Description</h3>
          <p>{{ ticket.description }}</p>
        </div>
      </section>

      <!-- Not Found State -->
      <div v-else class="not-found-card">
        <span class="not-found-icon">🔍</span>
        <h2>Ticket not found</h2>
        <p>The ticket you are looking for does not exist or has been removed.</p>
        <button class="btn-primary" @click="router.push('/')">
          Return to Dashboard
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.ticket-detail-layout {
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
  padding: 32px 16px;
}

.main-container {
  max-width: 900px;
  margin: 0 auto;
}

.nav-bar {
  margin-bottom: 24px;
}

.btn-back {
  background: transparent;
  border: none;
  color: #4f46e5;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-back:hover {
  text-decoration: underline;
}

/* Ticket Details Card */
.ticket-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.ticket-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.ticket-id-badge {
  font-size: 0.8rem;
  font-weight: 700;
  color: #4f46e5;
  background: #e0e7ff;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 8px;
}

h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
}

.ticket-badges {
  display: flex;
  gap: 8px;
  align-items: center;
}

/* Badges */
.tag-priority {
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: capitalize;
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
  color: #64748b;
}

.tag-status {
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: capitalize;
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

/* Metadata section */
.ticket-meta-grid {
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
}

.meta-item {
  display: flex;
  flex-direction: column;
}

.meta-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.meta-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
}

/* Description box */
.ticket-description-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
}

.ticket-description-box h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 8px;
}

.ticket-description-box p {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
}

/* Not found card */
.not-found-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 48px;
  text-align: center;
}

.not-found-icon {
  font-size: 3rem;
  margin-bottom: 12px;
  display: block;
}

.not-found-card h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.not-found-card p {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
}

.btn-primary:hover {
  background-color: #4338ca;
}
</style>