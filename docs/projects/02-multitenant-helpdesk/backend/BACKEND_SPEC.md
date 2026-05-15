# Multitenant Helpdesk Backend Spec

## Goal

Build a Laravel REST API for tenant-scoped ticket management.

## Backend Domains

- Tenants.
- Users.
- Agents.
- Customers.
- Tickets.
- Comments.
- Internal notes.
- SLA rules.
- Notifications.

## Important Rules

- Every ticket must belong to a tenant.
- Users can only access tickets in their tenant.
- Internal notes must be hidden from customers.
- SLA state should be calculated on the backend.

