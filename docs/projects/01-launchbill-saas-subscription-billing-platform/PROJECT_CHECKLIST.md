# LaunchBill Project Checklist

## Phase 1: Planning

- [ ] Finalize product scope.
- [ ] Confirm frontend stack.
- [ ] Confirm backend stack.
- [ ] Confirm PayFast payment flow.
- [ ] Confirm deployment target.
- [ ] Create frontend repository or folder.
- [ ] Create backend repository or folder.
- [ ] Confirm localization strategy.
- [ ] Confirm API testing collection strategy.

## Phase 2: Backend Foundation

- [ ] Create Laravel API project.
- [ ] Configure MySQL database.
- [ ] Configure Redis for queues and cache.
- [ ] Configure auth.
- [ ] Add Spatie Permission RBAC model.
- [ ] Add tenant stubs and global super admin role support.
- [ ] Add API response pattern.
- [ ] Add API Resource pattern.
- [ ] Add validation pattern.
- [ ] Add service layer pattern.
- [ ] Add reusable traits where shared backend behavior exists.
- [ ] Add request and state-change logging.
- [ ] Add email notification foundation.
- [ ] Add admin management/portal foundation.
- [ ] Add theme customization foundation.
- [ ] Add Spatie Media Library if theme logos or uploads are included.
- [ ] Add testing setup.
- [ ] Add seeders and factories for core demo data.
- [ ] Check and remove or replace `ExampleController`.
- [ ] Document API base URL and auth flow.

## Phase 3: Frontend Foundation

- [ ] Create Next.js project.
- [ ] Add design system basics.
- [ ] Add Coss UI/Base UI component approach.
- [ ] Add Tailwind CSS.
- [ ] Add TypeScript.
- [ ] Add shared Axios API client.
- [ ] Add state management approach.
- [ ] Add shared `types/` folder.
- [ ] Add auth screens.
- [ ] Add protected dashboard layout.
- [ ] Add admin portal layout.
- [ ] Add theme customization UI.
- [ ] Add loading, empty, and error states.
- [ ] Add alert components.
- [ ] Add reusable overlay components.
- [ ] Add ECharts setup.
- [ ] Add Vitest setup.
- [ ] Add Playwright setup.
- [ ] Confirm mobile layout works.

## Phase 4: SaaS Billing Features

- [ ] Plan management.
- [ ] Customer management.
- [ ] Subscription creation.
- [ ] Subscription cancellation.
- [ ] Invoice listing.
- [ ] Payment status tracking.
- [ ] Webhook handling.
- [ ] Failed payment handling.
- [ ] Email notifications for billing and account events.

## Phase 5: Dashboard And Reporting

- [ ] Revenue summary.
- [ ] Active subscriptions.
- [ ] Failed payments.
- [ ] Recent invoices.
- [ ] Customer growth.
- [ ] Export-ready billing report.

## Phase 6: Quality

- [ ] Backend auth tests.
- [ ] Backend permission tests.
- [ ] Backend tenant isolation tests.
- [ ] Backend payment webhook tests.
- [ ] Backend subscription lifecycle tests.
- [ ] Backend service tests for core functionality.
- [ ] Frontend browser smoke tests.
- [ ] Frontend Vitest coverage for core functionality.
- [ ] Playwright e2e tests for critical flows.
- [ ] Mobile responsiveness check.
- [ ] No horizontal overflow.
- [ ] README updated.

## Phase 7: Portfolio Proof

- [ ] Live frontend URL.
- [ ] Public GitHub repo.
- [ ] Screenshots captured.
- [ ] Architecture diagram created.
- [ ] Database diagram created.
- [ ] Case study written.
- [ ] Portfolio project card added.
- [ ] LinkedIn/GitHub README proof updated.

## Move-On Gate

Do not start Project 2 until every item above is complete or intentionally marked as not needed with a reason.
