# LaunchBill Payments And Webhooks

## Payment Provider Recommendation

Start with Stripe first because it has strong developer tooling, clean subscription support, test cards, and clear webhook documentation. Paystack can be added later as a regional provider proof point.

## Payment Features

- Create subscription checkout.
- Track subscription status.
- Track invoices.
- Track payment success.
- Track payment failure.
- Cancel subscription.
- Resume subscription if supported.

## Webhook Events To Handle

Stripe first:

- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.created`
- `invoice.paid`
- `invoice.payment_failed`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

## Webhook Rules

- Verify provider signature.
- Store webhook event before processing.
- Ignore duplicate provider event IDs.
- Process subscription and invoice changes inside database transactions where needed.
- Log failures clearly.
- Never trust frontend payment status.

## Portfolio Proof

The case study should explain how webhooks protect the system from fake payment states and keep billing records aligned with the provider.

