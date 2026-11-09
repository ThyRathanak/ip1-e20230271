
import { http } from "./http";
import type { Ticket } from "../types";

export function getTickets() {
  return http.get<Ticket[]>("/tickets");
}

export function getTicketById(id: number) {
  return http.get<Ticket>(`/tickets/${id}`);
}

export function createTicket(ticket: Omit<Ticket, "id">) {
  return http.post<Ticket>("/tickets", ticket);
}

export function updateTicket(
  id: number,
  data: Partial<Ticket>,
) {
  return http.patch<Ticket>(`/tickets/${id}`, data);
}

export function deleteTicket(id: number) {
  return http.delete(`/tickets/${id}`);
}
