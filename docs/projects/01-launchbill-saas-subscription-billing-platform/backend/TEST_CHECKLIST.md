# LaunchBill Backend Test Checklist

## Auth

- [ ] User can register.
- [ ] User can login.
- [ ] User can logout.
- [ ] Protected endpoints reject unauthenticated requests.

## RBAC

- [ ] Owner can manage billing resources.
- [ ] Viewer cannot create or update billing resources.
- [ ] Account scoping prevents cross-account access.

## Plans

- [ ] Plan can be created.
- [ ] Plan can be updated.
- [ ] Inactive plan cannot be used for new subscription.

## Customers

- [ ] Customer can be created.
- [ ] Customer can be updated.
- [ ] Customer list is scoped to account.

## Subscriptions

- [ ] Subscription can be created.
- [ ] Subscription can be cancelled.
- [ ] Subscription status changes correctly after webhook.

## Payments And Webhooks

- [ ] Webhook signature is required.
- [ ] Duplicate webhook event is ignored.
- [ ] Paid invoice updates invoice and payment records.
- [ ] Failed payment stores failure reason.

## Dashboard

- [ ] Dashboard summary returns scoped account totals.
- [ ] Revenue totals exclude failed payments.
- [ ] Subscription counts reflect current statuses.

