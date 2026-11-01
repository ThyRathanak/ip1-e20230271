<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { tickets as initialTickets } from "../data/tickets";
import type { Ticket } from "../types";
import TicketList from "../components/TicketList.vue";
import ClientSidebar from "../components/ClientSidebar.vue";

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
  <div class="dashboard-layout">
    <!-- Sidebar Navigation -->
   <ClientSidebar activePage="dashboard" />

    <!-- Main Content Wrapper -->
    <main class="main-content">
      <!-- Top Header Bar -->
      <header class="top-header">
        <div class="search-container">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Search tickets by ID, title, or keyword..." />
        </div>
        <div class="header-right">
          <button class="btn-primary" @click="router.push('/tickets/new')">+ Create Ticket</button>
          <div class="notification-bell">🔔<span class="dot"></span></div>
          <div class="user-profile">
            <div class="avatar">AM</div>
            <div class="user-meta">
              <span class="user-name">Alex Morgan</span>
              <span class="user-role">Client</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Dashboard Inner Body -->
      <div class="content-body">
        <div class="page-header-row">
          <div>
            <div class="breadcrumb">PORTAL > <span>OVERVIEW</span></div>
            <h1>Client Dashboard</h1>
            <p class="welcome-text">Welcome back, Dara Sok.</p>
          </div>
          <div class="status-indicator">
            <span class="green-dot"></span> Systems Nominal • SLAs on Track
          </div>
        </div>

        <!-- Summary Metric Cards -->
        <section class="summary">
          <article class="stat-card">
            <span class="stat-label">TOTAL TICKETS</span>
            <div class="stat-row">
              <h2>{{ myTickets.length }}</h2>
              <span class="badge success">+2 this wk</span>
            </div>
          </article>

          <article class="stat-card">
            <span class="stat-label">OPEN / IN PROGRESS</span>
            <div class="stat-row">
              <h2 class="blue-text">{{ openCount }}</h2>
              <span class="badge info">Active Queue</span>
            </div>
          </article>

          <article class="stat-card">
            <span class="stat-label">RESOLVED</span>
            <div class="stat-row">
              <h2>{{ resolvedCount }}</h2>
              <span class="stat-sub">93.3% SLA hit</span>
            </div>
          </article>
        </section>

        <!-- Notice Banner -->
        <div class="notice-banner">
          <span class="notice-icon">📢</span>
          <div class="notice-content">
            <div class="notice-title">Campus Network Operations Notice <span class="info-tag">INFO</span></div>
            <p>Scheduled core switch upgrades in Science Quad tonight from 02:00 to 04:00 AM EST. Wired Dorm Ethernet unaffected.</p>
          </div>
          <a href="#" class="notice-action">Incident Details →</a>
        </div>

        <!-- Tickets Section Header -->
        <div class="section-header">
          <h2>My Tickets</h2>
          <button class="btn-primary" @click="router.push('/tickets/new')">
            Create Ticket
          </button>
        </div>

        <!-- Tickets Table Container -->
        <div class="table-container">
          <TicketList
            :tickets="myTickets"
            @view="viewTicket"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* App Layout Base */
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 16px;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.logo-icon {
  background: #4f46e5;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
}

.client-tag {
  background: #e0e7ff;
  color: #4338ca;
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 4px;
}

.btn-create-sidebar {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.nav-link {
  padding: 10px 12px;
  color: #64748b;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;
}

.nav-link.active, .nav-link:hover {
  background-color: #e0e7ff;
  color: #4338ca;
}

.sidebar-footer {
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

/* Logout link styled red based on configuration */
.logout-link {
  color: #ef4444; 
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Main Content Area */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.top-header {
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
}

.search-container {
  display: flex;
  align-items: center;
  background: #f1f5f9;
  border-radius: 8px;
  padding: 8px 14px;
  width: 350px;
}

.search-container input {
  border: none;
  background: transparent;
  outline: none;
  margin-left: 8px;
  width: 100%;
  font-size: 0.85rem;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-primary {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
}

.notification-bell {
  position: relative;
  cursor: pointer;
  font-size: 1.1rem;
}

.notification-bell .dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 36px;
  height: 36px;
  background: #4f46e5;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.8rem;
}

.user-meta {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 0.85rem;
  font-weight: 600;
}

.user-role {
  font-size: 0.75rem;
  color: #64748b;
}

/* Content Body Structure */
.content-body {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.page-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.breadcrumb {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
}
.breadcrumb span {
  color: #4f46e5;
}

h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 4px;
}

.welcome-text {
  font-size: 0.9rem;
  color: #64748b;
  margin-top: 2px;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #475569;
}

.green-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
}

/* Stat Cards */
.summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px;
}

.stat-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
}

.stat-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.stat-row h2 {
  font-size: 2rem;
  font-weight: 700;
}

.blue-text {
  color: #2563eb;
}

.badge {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
}

.badge.success {
  background: #dcfce7;
  color: #15803d;
}

.badge.info {
  background: #dbeafe;
  color: #1d4ed8;
}

.stat-sub {
  font-size: 0.75rem;
  color: #64748b;
}

/* Notice Banner */
.notice-banner {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.notice-icon {
  font-size: 1.5rem;
}

.notice-content {
  flex: 1;
}

.notice-title {
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-tag {
  background: #e0e7ff;
  color: #4338ca;
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 4px;
}

.notice-content p {
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 2px;
}

.notice-action {
  color: #4f46e5;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  white-space: nowrap;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.section-header h2 {
  font-size: 1.25rem;
  font-weight: 700;
}

.table-container {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
}

</style>