# LaunchBill Backend Spec

## Goal

Build a Laravel REST API that owns billing logic, subscriptions, payments, permissions, and reporting data for the LaunchBill frontend.

## Backend Responsibilities

- Authenticate users.
- Authorize actions with roles and permissions.
- Manage customers.
- Manage subscription plans.
- Manage subscriptions.
- Handle payment provider webhooks.
- Store invoice and payment records.
- Dispatch notification and billing jobs.
- Expose dashboard metrics.
- Return consistent JSON responses.

## Core Domains

- Auth and users.
- Teams or accounts.
- Roles and permissions.
- Plans.
- Customers.
- Subscriptions.
- Invoices.
- Payments.
- Webhooks.
- Notifications.
- Audit logs.

## Suggested Laravel Packages

- Laravel Sanctum for API auth.
- Spatie Laravel Permission for RBAC.
- Laravel Cashier if Stripe is the chosen provider.
- Laravel Queue with Redis for background jobs.

## Non-Negotiable Rules

- Backend validates every request.
- Backend checks permissions for protected actions.
- Backend never trusts payment status from the frontend.
- Webhooks must be verified before processing.
- Subscription state changes must be logged.
- Sensitive provider secrets stay in environment variables.

