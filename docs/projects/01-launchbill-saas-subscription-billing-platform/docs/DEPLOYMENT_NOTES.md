# LaunchBill Deployment Notes

## Frontend

- Host on Vercel.
- Configure API base URL through environment variables.
- Confirm production build passes.
- Confirm mobile pages have no horizontal overflow.

## Backend

- Host on a Laravel-compatible platform.
- Configure database.
- Configure Redis if queues are used.
- Configure queue worker.
- Configure scheduler if recurring jobs are used.
- Configure PayFast payment provider secrets.
- Configure webhook endpoint.

## Environment Variables

Frontend:

- `NEXT_PUBLIC_API_URL`

Backend:

- `APP_URL`
- `DB_*`
- `REDIS_*`
- `PAYFAST_MERCHANT_ID`
- `PAYFAST_MERCHANT_KEY`
- `PAYFAST_PASSPHRASE`
- `PAYFAST_WEBHOOK_SECRET` if used by the chosen implementation.

## Production Checklist

- [ ] Frontend deployed.
- [ ] Backend deployed.
- [ ] Database migrated.
- [ ] Queue worker running.
- [ ] Payment webhook registered.
- [ ] Demo account created.
- [ ] Logs checked after first test payment.
