
export type UserRole = "client" | "staff" | "admin";

export type TicketStatus =
  | "open"
  | "in_progress"
  | "resolved"
  | "closed";

export type TicketPriority = "low" | "medium" | "high";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export interface Ticket {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: TicketPriority;
  status: TicketStatus;
  clientId: number;
  assignedStaffId: number | null;
  createdAt: string;
}

export interface TicketMessage {
  id: number;
  ticketId: number;
  senderId: number;
  message: string;
  createdAt: string;
}
