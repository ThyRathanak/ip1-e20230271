
import { createRouter, createWebHistory } from "vue-router";

import ClientDashboard from "../views/ClientDashboard.vue";
import StaffTicketQueue from "../views/StaffTicketQueue.vue";
import TicketDetails from "../views/TicketDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      redirect: "/client",
    },
    {
      path: "/client",
      name: "client-dashboard",
      component: ClientDashboard,
    },
    {
      path: "/staff/tickets",
      name: "staff-tickets",
      component: StaffTicketQueue,
    },
    {
      path: "/tickets/:id",
      name: "ticket-details",
      component: TicketDetails,
    },
  ],
});

export default router;
