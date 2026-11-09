
import { http } from "./http";
import type { TicketMessage } from "../types";

export function getMessages() {
  return http.get<TicketMessage[]>("/messages");
}

export function getMessagesByTicket(ticketId: number) {
  return http.get<TicketMessage[]>(
    `/messages?ticketId=${ticketId}`,
  );
}

export function createMessage(
  message: Omit<TicketMessage, "id">,
) {
  return http.post<TicketMessage>("/messages", message);
}
