
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ticket } from "../types";
import { getTickets, createTicket } from "../api/tickets";

export const useTicketStore = defineStore("ticket", () => {
  // State
  const tickets = ref<Ticket[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Fetch tickets from API
  async function fetchTickets() {
    loading.value = true;
    error.value = null;

    try {
      tickets.value = await getTickets();
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : "Failed to load tickets.";
    } finally {
      loading.value = false;
    }
  }

  // Add a new ticket
  async function addTicket(ticket: Omit<Ticket, "id">) {
    error.value = null;

    try {
      const newTicket = await createTicket(ticket);
      tickets.value.push(newTicket);
      return newTicket;
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : "Failed to create ticket.";
      throw err;
    }
  }

  return {
    tickets,
    loading,
    error,
    fetchTickets,
    addTicket,
  };
});
