# AI Document Intelligence Backend Spec

## Goal

Build a REST API that manages document upload, parsing, search, AI summaries, and access control.

## Backend Domains

- Users.
- Workspaces.
- Documents.
- Extracted text.
- Search indexes.
- AI requests.
- Audit logs.

## Important Rules

- File upload validation must happen on the backend.
- Document access must be permission-scoped.
- Expensive parsing and AI work should use jobs.
- AI output should be stored only when it helps the user workflow.

