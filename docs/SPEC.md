# Helpdesk Ticket Management System

## 1. Project Overview

The Helpdesk Ticket Management System is a web application that helps users report technical problems and allows support agents to manage and resolve them. Users can create tickets, track their progress, and communicate with support agents. Agents can view, search, filter, and update tickets.

## 2. User Roles

### User

- Create support tickets.
- View their own tickets.
- Check ticket status.
- Read replies and provide additional information.

### Support Agent

- View submitted tickets.
- Search and filter tickets.
- Assign tickets to agents.
- Update ticket status and priority.
- Reply to users and resolve tickets.

## 3. User Stories and Acceptance Criteria

### US-01: Create a Ticket

As a user, I want to submit a support ticket so that I can report a problem.

Acceptance criteria:

- The user can enter a title and description.
- The title and description are required.
- A successful submission creates a ticket with a default status of Open.

### US-02: View My Tickets

As a user, I want to see my tickets so that I can track my reported problems.

Acceptance criteria:

- The user sees only their own tickets.
- Each ticket displays its title, status, priority, and creation date.
- Selecting a ticket opens its details.

### US-03: View Ticket Details

As a user, I want to view a ticket's details so that I can understand its progress.

Acceptance criteria:

- The details page shows the title and description.
- The page displays the current status and priority.
- The page displays replies associated with the ticket.

### US-04: Reply to a Ticket

As a user, I want to add information to my ticket so that I can explain my problem more clearly.

Acceptance criteria:

- The user can submit a non-empty reply.
- The reply appears in the ticket conversation.
- The reply is associated with the correct ticket and user.

### US-05: View All Tickets

As a support agent, I want to view submitted tickets so that I can manage support requests.

Acceptance criteria:

- The agent can access the ticket management list.
- Each row shows the ticket title, status, priority, and assigned agent.
- The agent can open ticket details.

### US-06: Search and Filter Tickets

As a support agent, I want to search and filter tickets so that I can find specific problems quickly.

Acceptance criteria:

- The agent can search tickets by title.
- The agent can filter tickets by status.
- The list updates to show matching tickets.

### US-07: Update Ticket Status and Priority

As a support agent, I want to change a ticket's status and priority so that I can manage its progress.

Acceptance criteria:

- The agent can change status to Open, In Progress, or Resolved.
- The agent can set priority to Low, Medium, or High.
- The updated values are displayed in the ticket list and details.

### US-08: Reply to and Resolve a Ticket

As a support agent, I want to reply to a user and resolve their ticket so that I can complete the support process.

Acceptance criteria:

- The agent can submit a non-empty reply.
- The reply appears in the ticket conversation.
- The agent can mark the ticket as Resolved.

## 4. Main Entities

- User: stores user identity and role.
- Ticket: stores the support request, status, priority, creator, and assigned agent.
- Reply: stores messages belonging to a ticket.

## 5. Project Scope

The first version focuses on ticket creation, ticket management, communication, search, and filtering. Authentication, database integration, backend validation, pagination, and automated testing will be implemented progressively during the semester.
