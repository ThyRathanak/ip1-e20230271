```vue
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

defineProps<{
  activePage: string;
}>();

function logout() {
  // TODO: Implement logout
  router.push("/login");
}
</script>

<template>
  <aside class="sidebar">
    <div>
      <div class="sidebar-brand">
        <div class="logo-icon">📋</div>
        <span class="brand-name">HelpDesk</span>
        <span class="client-tag">CLIENT</span>
      </div>

      <button
        class="btn-create"
        @click="router.push('/tickets/new')"
      >
        + Create Ticket
      </button>

      <nav class="sidebar-nav">
        <RouterLink
          to="/client/dashboard"
          class="nav-link"
          :class="{ active: activePage === 'dashboard' }"
        >
          ⊞ Dashboard
        </RouterLink>

        <RouterLink
          to="/tickets"
          class="nav-link"
          :class="{ active: activePage === 'tickets' }"
        >
          📋 My Tickets
        </RouterLink>

        <RouterLink
          to="/notifications"
          class="nav-link"
          :class="{ active: activePage === 'notifications' }"
        >
          🔔 Notifications
        </RouterLink>

        <RouterLink
          to="/profile"
          class="nav-link"
          :class="{ active: activePage === 'profile' }"
        >
          👤 Profile
        </RouterLink>
      </nav>
    </div>

    <div class="sidebar-footer">
      <a href="#" class="logout-link" @click.prevent="logout">
        ↪ Logout
      </a>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  flex-shrink: 0;
  background: white;
  border-right: 1px solid #e2e8f0;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.btn-create {
  width: 100%;
  background: #4f46e5;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-link {
  display: block;
  padding: 10px 12px;
  color: #64748b;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
}

.nav-link.active,
.nav-link:hover {
  background: #e0e7ff;
  color: #4338ca;
}

.sidebar-footer {
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.logout-link {
  color: #ef4444;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

@media (max-width: 650px) {
  .sidebar {
    display: none;
  }
}
</style>
```