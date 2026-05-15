# Booking Payments Marketplace Backend Spec

## Goal

Build a REST API for marketplace providers, services, bookings, payments, reviews, and admin approval.

## Backend Domains

- Users.
- Providers.
- Services.
- Availability.
- Bookings.
- Payments.
- Reviews.
- Admin approvals.

## Important Rules

- Booking conflict checks belong on the backend.
- Provider approval state must be enforced by the API.
- Payment status must come from the payment provider or trusted backend state.
- Customer and provider permissions must be separate.

