# Check 1

Tag: check-1
Commit: 5883d5a

## Done

- [x] docs/SPEC.md: 6–10 user stories with acceptance criteria and at least 2 roles
- [x] Wireframes saved in docs/wireframes/
- [x] frontend/ runs with npm run dev from a fresh clone
- [x] First static screens built from the specification
- [x] AI_LOG.md and DECISIONS.md contain real entries
- [x] Small meaningful commits completed
- [x] Tag check-1 created and pushed

## AI use this period

- Used ChatGPT to plan the project scope, define the User and Support Agent roles, and draft eight user stories with acceptance criteria.
- Used ChatGPT to plan the initial wireframes for the login, user dashboard, create-ticket, and agent dashboard screens.
- Used ChatGPT for guidance on the initial Vue 3 + TypeScript implementation and project structure (if applicable).

## One decision I made and why

I decided to separate the User and Support Agent roles because they have different responsibilities. Users can create tickets and track their own problems, while support agents can manage tickets, update their status, and reply to users. This separation makes the application easier to understand and supports role-based permissions in later development.

## What I would show if asked to explain one thing

I would explain the ticket list component. It displays multiple tickets using sample data and Vue's v-for directive. Each ticket shows its title, status, and priority. Using a component for the ticket list makes the interface easier to maintain and allows it to be connected to backend data in a later milestone.