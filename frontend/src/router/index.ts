
import { createRouter, createWebHistory } from "vue-router";

import ClientDashboard from "../views/ClientDashboard.vue";
import StaffTicketQueue from "../views/StaffTicketQueue.vue";
import TicketDetails from "../views/TicketDetails.vue";
import CreateTicket from "../views/CreateTicket.vue";
import NotFound from "../views/NotFound.vue";

import type { UserRole } from "../types";

// Mock logged-in user for M1 prototype
const currentUserRole: UserRole = "staff";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      redirect: "/client/dashboard",
    },
    {
      path: "/client/dashboard",
      name: "client-dashboard",
      component: ClientDashboard,
    },
    {
      path: "/tickets/new",
      name: "create-ticket",
      component: CreateTicket,
    },
    {
      path: "/tickets/:id",
      name: "ticket-details",
      component: TicketDetails,
      props: true,
    },
    {
      path: "/staff/tickets",
      name: "staff-tickets",
      component: StaffTicketQueue,
      meta: { requiresStaff: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

// Role-based navigation guard
router.beforeEach((to) => {
  if (to.meta.requiresStaff && currentUserRole !== "staff") {
    return { name: "client-dashboard" };
  }
});

export default router;
