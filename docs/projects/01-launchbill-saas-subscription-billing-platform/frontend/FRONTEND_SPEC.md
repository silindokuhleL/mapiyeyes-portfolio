# LaunchBill Frontend Spec

## Goal

Build a client-facing Next.js dashboard that makes billing and subscription management feel clear, trustworthy, and business-ready.

## Frontend Responsibilities

- Render auth screens.
- Render protected dashboard screens.
- Call the Laravel REST API.
- Display loading, empty, success, and error states.
- Provide forms for plans, customers, subscriptions, and billing actions.
- Keep UI responsive on desktop and phone.

## Main Pages

- Landing or login redirect.
- Login.
- Register or invite acceptance.
- Dashboard overview.
- Plans.
- Customers.
- Customer detail.
- Subscriptions.
- Invoices.
- Payments.
- Settings.
- Team and roles.

## UX Direction

The UI should feel like a practical SaaS admin product:

- Dense but readable.
- Clear page titles.
- Strong tables and filters.
- Useful status badges.
- Predictable forms.
- No oversized marketing sections inside the app.
- Mobile screens must stack cleanly and avoid horizontal scroll.

## API Integration Rules

- Use a central API client.
- Store auth state carefully.
- Treat API validation errors as first-class UI states.
- Do not hardcode business data that should come from the backend.
- Use environment variables for API base URLs.

## Required States

Every major page needs:

- Loading state.
- Empty state.
- Error state.
- Success feedback.
- Permission-denied state where applicable.

