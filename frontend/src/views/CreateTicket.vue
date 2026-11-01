```vue
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import ClientSidebar from "../components/ClientSidebar.vue";

const router = useRouter();

const form = ref({
  title: "",
  category: "",
  priority: "medium",
  description: "",
});

const errors = ref({
  title: "",
  category: "",
  description: "",
});

function submitTicket() {
  errors.value = {
    title: "",
    category: "",
    description: "",
  };

  if (!form.value.title.trim()) {
    errors.value.title = "Please enter a ticket title.";
  }

  if (!form.value.category) {
    errors.value.category = "Please select a category.";
  }

  if (!form.value.description.trim()) {
    errors.value.description = "Please describe your problem.";
  }

  if (Object.values(errors.value).some(Boolean)) return;

  // TODO: Connect to backend API
  alert("Ticket submitted successfully!");

  router.push("/tickets");
}

function cancel() {
  router.push("/tickets");
}
</script>

<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <ClientSidebar activePage="create" />

    <!-- Main Content -->
    <main class="main-content">
      <header class="top-header">
        <div class="breadcrumb">
          PORTAL / TICKETS / <span>CREATE TICKET</span>
        </div>

        <div class="user-profile">
          <div class="avatar">AM</div>
          <div class="user-meta">
            <span class="user-name">Alex Morgan</span>
            <span class="user-role">Client</span>
          </div>
        </div>
      </header>

      <div class="content-body">
        <!-- Page Heading -->
        <div class="page-heading">
          <div>
            <h1>Create Support Ticket</h1>
            <p>
              Describe your issue and our support team will help you.
            </p>
          </div>
        </div>

        <!-- Form Layout -->
        <div class="form-layout">
          <section class="form-card">
            <div class="card-heading">
              <h2>Ticket Information</h2>
              <p>Fill in the details below to submit your request.</p>
            </div>

            <form @submit.prevent="submitTicket">
              <!-- Title -->
              <div class="form-group">
                <label for="title">Ticket Title *</label>
                <input
                  id="title"
                  v-model="form.title"
                  type="text"
                  placeholder="e.g. Unable to connect to campus Wi-Fi"
                />
                <span class="error">{{ errors.title }}</span>
              </div>

              <!-- Category -->
              <div class="form-group">
                <label for="category">Category *</label>
                <select id="category" v-model="form.category">
                  <option value="" disabled>Select a category</option>
                  <option value="hardware">Hardware</option>
                  <option value="software">Software</option>
                  <option value="network">Network</option>
                  <option value="account">Account & Access</option>
                  <option value="other">Other</option>
                </select>
                <span class="error">{{ errors.category }}</span>
              </div>

              <!-- Priority -->
              <div class="form-group">
                <label for="priority">Priority *</label>
                <select id="priority" v-model="form.priority">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
                <small>
                  Choose the priority based on how seriously the issue
                  affects your work.
                </small>
              </div>

              <!-- Description -->
              <div class="form-group">
                <label for="description">Problem Description *</label>
                <textarea
                  id="description"
                  v-model="form.description"
                  rows="6"
                  placeholder="Explain your problem, when it started, and what you have tried..."
                ></textarea>
                <span class="error">{{ errors.description }}</span>
              </div>

              <!-- Attachments (UI only) -->
              <div class="form-group">
                <label>Attachments (Optional)</label>
                <label class="upload-area">
                  <span class="upload-icon">📎</span>
                  <strong>Click to upload a file</strong>
                  <small>PNG, JPG or PDF (Max 5MB)</small>
                  <input type="file" accept=".png,.jpg,.jpeg,.pdf" />
                </label>
              </div>

              <!-- Actions -->
              <div class="form-actions">
                <button
                  type="button"
                  class="btn-secondary"
                  @click="cancel"
                >
                  Cancel
                </button>

                <button type="submit" class="btn-primary">
                  Submit Ticket →
                </button>
              </div>
            </form>
          </section>

          <!-- Help Panel -->
          <aside class="help-card">
            <div class="help-icon">💡</div>
            <h3>Need help?</h3>
            <p>
              Provide as much detail as possible so our support team
              can resolve your issue faster.
            </p>

            <div class="help-tips">
              <strong>Tips for a better ticket</strong>
              <ul>
                <li>Use a clear and specific title.</li>
                <li>Select the correct category.</li>
                <li>Explain the steps to reproduce the issue.</li>
                <li>Attach screenshots if helpful.</li>
              </ul>
            </div>

            <div class="response-info">
              <strong>Expected Response</strong>
              <p>Our support team will review your request shortly.</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

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
  margin-bottom: 24px;
}

.logo-icon {
  background: #4f46e5;
  color: white;
  padding: 6px 9px;
  border-radius: 6px;
}

.client-tag {
  background: #e0e7ff;
  color: #4338ca;
  font-size: 10px;
  padding: 3px 6px;
  border-radius: 4px;
}

.btn-create-sidebar,
.btn-primary {
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 11px 16px;
  font-weight: 600;
  cursor: pointer;
}

.btn-create-sidebar {
  width: 100%;
  margin-bottom: 20px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.nav-link {
  text-decoration: none;
  padding: 11px 12px;
  color: #64748b;
  border-radius: 6px;
  font-size: 14px;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: #e0e7ff;
  color: #4338ca;
}

.sidebar-footer {
  border-top: 1px solid #e2e8f0;
  padding-top: 16px;
}

.logout-link {
  color: #ef4444;
  text-decoration: none;
  font-weight: 600;
}

.main-content {
  flex: 1;
  min-width: 0;
}

.top-header {
  height: 64px;
  padding: 0 32px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.breadcrumb {
  color: #64748b;
  font-size: 12px;
  font-weight: 600;
}

.breadcrumb span {
  color: #4f46e5;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #4f46e5;
  color: white;
  display: grid;
  place-items: center;
  font-size: 12px;
}

.user-meta {
  display: flex;
  flex-direction: column;
  font-size: 13px;
}

.user-name {
  font-weight: 600;
}

.user-role {
  color: #64748b;
  font-size: 12px;
}

.content-body {
  padding: 32px;
}

.page-heading {
  margin-bottom: 24px;
}

.page-heading h1 {
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 6px;
}

.page-heading p,
.card-heading p {
  color: #64748b;
  font-size: 14px;
  margin: 0;
}

.form-layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);
  gap: 20px;
  align-items: start;
}

.form-card,
.help-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 24px;
}

.card-heading {
  margin-bottom: 24px;
}

.card-heading h2 {
  font-size: 18px;
  margin: 0 0 6px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.form-group input:not([type="file"]),
.form-group select,
.form-group textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 11px 12px;
  font-family: inherit;
  font-size: 14px;
  outline: none;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px #4f46e51a;
}

.form-group textarea {
  resize: vertical;
}

.form-group small {
  color: #64748b;
  font-size: 12px;
  margin-top: 6px;
}

.error {
  color: #dc2626;
  font-size: 12px;
  margin-top: 5px;
}

.upload-area {
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  color: #475569;
}

.upload-area input {
  display: none;
}

.upload-icon {
  font-size: 24px;
}

.upload-area small {
  color: #94a3b8;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.btn-secondary {
  background: white;
  border: 1px solid #cbd5e1;
  color: #475569;
  border-radius: 6px;
  padding: 10px 18px;
  cursor: pointer;
}

.help-card {
  color: #334155;
}

.help-icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.help-card h3 {
  margin: 0 0 10px;
}

.help-card p,
.help-tips li {
  color: #64748b;
  font-size: 13px;
  line-height: 1.7;
}

.help-tips {
  margin-top: 24px;
}

.help-tips strong,
.response-info strong {
  font-size: 13px;
}

.help-tips ul {
  padding-left: 20px;
}

.response-info {
  background: #eef2ff;
  border-radius: 8px;
  padding: 14px;
  margin-top: 24px;
}

.response-info p {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .form-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .sidebar {
    display: none;
  }

  .top-header {
    padding: 0 16px;
  }

  .content-body {
    padding: 20px 14px;
  }

  .form-card,
  .help-card {
    padding: 18px;
  }

  .page-heading h1 {
    font-size: 22px;
  }
}
</style>
```