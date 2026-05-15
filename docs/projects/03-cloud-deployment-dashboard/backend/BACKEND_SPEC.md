# Cloud Deployment Dashboard Backend Spec

## Goal

Build a REST API that stores deployment events, service health checks, incidents, and release notes.

## Backend Domains

- Projects.
- Environments.
- Deployments.
- Services.
- Health checks.
- Incidents.
- Release notes.
- Reports.

## Important Rules

- Health calculations belong on the backend.
- Scheduled checks should run as jobs.
- Incident status changes should be auditable.
- Dashboard summaries should be derived from stored deployment and health data.

