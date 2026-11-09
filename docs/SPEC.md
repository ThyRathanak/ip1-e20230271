# Helpdesk Ticket Management System

## 1. Project Overview

The Helpdesk Ticket Management System is a web application that allows clients to report technical problems and enables support staff to manage and resolve them. Clients can create tickets, track their progress, and communicate with staff. Admins oversee tickets and assign them to staff members.

## 2. User Roles

### Client
- Create support tickets.
- View and track their own tickets.
- Reply to support staff.

### Staff
- View assigned tickets.
- Search and filter tickets.
- Update ticket status and priority.
- Reply to clients and resolve tickets.

### Admin
- View all submitted tickets.
- Assign tickets to staff.
- Manage client and staff accounts.

## 3. User Stories and Acceptance Criteria

### US-01: Create a Ticket
As a client, I want to submit a support ticket so that I can report a problem.

- Enter a ticket title and description.
- Both fields are required.
- New tickets have a default status of Open.

### US-02: View My Tickets
As a client, I want to view my tickets so that I can track their progress.

- View only my own tickets.
- See ticket title, status, priority, and creation date.
- Open ticket details.

### US-03: View Ticket Details and Reply
As a client, I want to view ticket details and reply so that I can communicate with support staff.

- View ticket description, status, and priority.
- Read previous replies.
- Submit a non-empty reply.

### US-04: Manage Assigned Tickets
As a staff member, I want to view, search, and filter assigned tickets so that I can manage support requests.

- View tickets assigned to me.
- Search by ticket title.
- Filter by ticket status.

### US-05: Update Tickets
As a staff member, I want to update ticket information so that I can manage and resolve problems.

- Change status to Open, In Progress, or Resolved.
- Change priority to Low, Medium, or High.
- Reply to clients.

### US-06: View All Tickets
As an admin, I want to view all submitted tickets so that I can monitor support requests.

- View all tickets.
- See ticket status, priority, and assigned staff.
- Open ticket details.

### US-07: Assign Tickets
As an admin, I want to assign tickets to staff so that support requests are handled by responsible people.

- Select a staff member.
- Assign a ticket to that staff member.
- Display the assigned staff member in ticket details.

### US-08: Manage Users
As an admin, I want to manage client and staff accounts so that I can control system access.

- View users and their roles.
- Create and update client and staff accounts.

## 4. Main Entities

- **User:** id, name, email, password, role (client, staff, admin).
- **Ticket:** id, title, description, status, priority, clientId, assignedStaffId, createdAt.
- **Reply:** id, ticketId, userId, message, createdAt.

## 5. Project Scope

The first version focuses on ticket creation, ticket management, communication, search, filtering, and ticket assignment for Client, Staff, and Admin roles.

Authentication, database integration, backend validation, pagination, and automated testing will be implemented progressively during the semester.

## 6. Technology Stack

- Frontend: Vue 3 + TypeScript
- Backend: NestJS
- Database: PostgreSQL
- ORM: Prisma
- State Management: Pinia
- Routing: Vue Router
- Testing: Vitest

## 7. Expected Outcome

A functional web application that helps clients report technical problems, allows staff to manage and resolve tickets, and enables admins to oversee users and ticket assignments.