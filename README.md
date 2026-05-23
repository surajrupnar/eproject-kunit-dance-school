# K Unit Dance School — Fullstack Project

This repository contains a Spring Boot backend and a React + Tailwind frontend for the "K Unit Dance School" portfolio site.

Backend (Spring Boot):
- Location: ./backend (Maven project root)
- Run: mvn spring-boot:run
- Configure the database in `src/main/resources/application.properties` (PostgreSQL example provided). Set `spring.datasource.*` values.
- Configure Telegram in the same file: set `telegram.bot-token` and `telegram.admin-chat-ids` (comma separated numbers). The backend polls Telegram for messages from admin chat IDs and saves them as announcements.

Frontend (React + Vite + Tailwind):
- Location: ./frontend
- Install: cd frontend && npm install
- Dev server: npm run dev (starts Vite dev server)

Notes on the architecture:
- Backend exposes REST endpoints under `/api/*`: courses, inquiries, announcements.
- Frontend fetches announcements from `/api/announcements` and displays them in a banner.
- Floating WhatsApp widget opens WhatsApp with a prefilled message.

