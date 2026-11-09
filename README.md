# Helpdesk Ticket Management System

A web application for managing IT support requests. Clients can submit and track tickets, staff can respond and update ticket status, and admins can manage ticket assignments.

## Project Information

- **Course:** Internet Programming I
- **Frontend:** Vue 3 + TypeScript
- **State Management:** Pinia
- **Routing:** Vue Router
- **Mock API:** JSON Server
- **Testing:** Vitest
- **Code Quality:** ESLint + Prettier

## User Roles

| Role   | Main Responsibilities                 |
| ------ | ------------------------------------- |
| Client | Create and track tickets              |
| Staff  | Manage tickets and respond to clients |
| Admin  | Manage users and assign tickets       |

## Main Features

- Create and view support tickets.
- Track ticket status and priority.
- View ticket details and messages.
- Staff ticket management.
- Admin ticket assignment.

# Milestones

## M0 Project Idea and Requirements

**Status:** Completed

### Project Overview

The Helpdesk Ticket Management System is designed to help an organization manage IT support requests efficiently.

### User Roles

- **Client:** Submit support tickets and track their progress.
- **Staff:** View assigned tickets, respond to clients, and update ticket status.
- **Admin:** Manage users and assign tickets to staff.

### Documentation

- Project idea and requirements.
- User roles and responsibilities.
- Initial project planning.
- UI wireframes and component documentation.

## M1 Frontend Prototype

**Status:** Completed

### Completed Requirements

1. **Database Structure**
   - Created `db.json` with separate arrays for entities.
   - Used IDs to establish relationships between entities.
2. **Mock API**
   - Installed and configured JSON Server.
   - Created `src/api/http.ts`.
   - Created resource-specific API modules.
3. **Routing**
   - Implemented routes for main pages.
   - Added dynamic ticket detail routes.
   - Added a 404 Not Found page.
   - Implemented role-based navigation guards.
4. **Pinia State Management**
   - Implemented Pinia stores.
   - Handled loading, error, empty, and success states.
5. **Form Validation**
   - Added required-field validation.
   - Displayed clear error messages under form fields.
   - Prevented submission when validation fails.
6. **README and Running Instructions**
   - Documented installation and application startup instructions.

### M1 Verification

- Frontend production build: `npm run build`.
- Mock API: `npm run api`.
- Frontend development server: `npm run dev`.

## Installation and Running

### Prerequisites

- Node.js
- npm

### 1. Install Dependencies

Open a terminal in the project root:

```bash
cd frontend
npm install
```

### 2. Start the Mock API

Open the first terminal in the `frontend` directory:

```bash
npm run api
```

JSON Server runs at:

```text
http://localhost:3000
```

### 3. Start the Frontend

Open a second terminal in the `frontend` directory:

````bash
npm run dev
Open the local URL displayed by Vite in your browser.
**Important:** Keep both terminals running while using the application.
### 4. Run Tests
```bash
npm run test:unit
````

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```text
ip1-e20230271/
├── docs/
│   ├── wireframes/
│   └── components.md
├── frontend/
│   ├── db.json
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   ├── stores/
│   │   ├── data/
│   │   └── types.ts
│   ├── package.json
│   └── README.md (if present)
└── README.md
```

## Development Approach

- Vue 3 Composition API with TypeScript.
- Props down and events up for component communication.
- Pinia for shared state management.
- Vue Router for page navigation.
- JSON Server for mock API development.
- Form validation for user input.
