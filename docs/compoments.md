
# Helpdesk Ticket System — Component Design

## 1. Client Dashboard

Component tree:
- ClientDashboard
  - DashboardSummary
  - TicketList
    - TicketRow
  - BaseButton

Props:
- DashboardSummary: openCount, resolvedCount
- TicketList: tickets
- TicketRow: ticket

Events:
- TicketRow emits view(ticketId)
- ClientDashboard handles the view event

State ownership:
- ClientDashboard owns the ticket list.
- DashboardSummary receives summary values as props.
- TicketList receives tickets as props.
- TicketRow does not own ticket data.

## 2. Staff Ticket Queue

Component tree:
- StaffTicketQueue
  - TicketFilters
  - TicketList
    - TicketRow

Props:
- TicketFilters: currentStatus
- TicketList: tickets
- TicketRow: ticket

Events:
- TicketFilters emits filter-change(status)
- TicketRow emits view(ticketId)

State ownership:
- StaffTicketQueue owns the selected filter.
- StaffTicketQueue owns the ticket list.
- Child components receive data through props.

## 3. Ticket Details

Component tree:
- TicketDetails
  - TicketInfo
  - TicketConversation
  - TicketReplyForm

Props:
- TicketInfo: ticket
- TicketConversation: messages

Events:
- TicketReplyForm emits send(message)
- TicketDetails handles the send event

State ownership:
- TicketDetails owns the selected ticket and messages.
- TicketReplyForm owns its temporary input text.
- TicketDetails updates messages after a reply.

## 4. Admin Dashboard

Component tree:
- AdminDashboard
  - DashboardSummary
  - TicketList
  - TicketAssignment

Props:
- DashboardSummary: totalCount, openCount
- TicketList: tickets
- TicketAssignment: ticket, staffMembers

Events:
- TicketAssignment emits assign(ticketId, staffId)

State ownership:
- AdminDashboard owns ticket and staff data.
- AdminDashboard handles ticket assignment.

## 5. Create Ticket

Component tree:
- CreateTicket
  - TicketForm

Props:
- TicketForm: categories

Events:
- TicketForm emits submit(ticketData)

State ownership:
- TicketForm owns its form inputs.
- CreateTicket handles the submitted ticket
  and adds it to the ticket list.
