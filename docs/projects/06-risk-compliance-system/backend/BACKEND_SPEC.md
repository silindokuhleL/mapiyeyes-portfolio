# Risk Compliance System Backend Spec

## Goal

Build a REST API for risk records, scoring, mitigation tasks, approvals, audit history, and reporting.

## Backend Domains

- Departments.
- Risks.
- Risk scores.
- Mitigation tasks.
- Approvals.
- Audit logs.
- Reports.
- Exports.

## Important Rules

- Scoring rules belong on the backend.
- Approval transitions must be permission-controlled.
- Audit logs must record important state changes.
- Reports should be generated from stored risk and mitigation data.

