# Fitness Coaching Engine — Tech Stack Documentation

## 1. Projekt-Übersicht

**Fitness Coaching Engine** ist eine Full-Stack Web-Anwendung zur Verwaltung und Analyse von Fitness-Trainingsdaten. Die App ermöglicht Benutzern das Tracking von Trainingsplänen, Übungen und Fortschritten mit KI-gestützter Exekutiv-Analyse und einem hybrid-basierten Exercise-Classification-System.

---

## 2. Tech-Stack Übersicht

### 2.1 Frontend

| Kategorie | Technologie | Version | Use Case |
|-----------|-------------|---------|----------|
| **Framework** | React | 19.2.0 | UI-Framework mit Server Components |
| **Sprache** | TypeScript | 5.9.3 | Type-safe JavaScript |
| **Build Tool** | Vite | 7.3.1 | Schnelles Dev- & Build-System |
| **Styling** | TailwindCSS | 4.2.1 | Utility-first CSS Framework |
| **State Management** | TanStack Query | 5.90.21 | Server State (Cache, Sync) |
| **State Management** | Zustand | (via store/) | Client State Management |
| **Charts** | Recharts | 3.7.0 | Datenvisualisierung |
| **Animation** | Framer Motion | 12.34.5 | UI-Animationen |
| **i18n** | i18next | 25.8.17 | Internationalisierung (en/de) |
| **HTTP Client** | Axios | 1.13.6 | API-Kommunikation |
| **PWA** | Workbox | 7.4.0 | Offline-Support, Caching |
| **Mobile** | Capacitor | 7.0.0 | Android APK-Build |
| **Testing** | Vitest | 4.1.0 | Unit & Integration Tests |
| **Testing UI** | @vitest/ui | 4.1.0 | Test-Interface |
| **Coverage** | @vitest/coverage-v8 | 4.1.0 | Coverage Reports |
| **Linting** | ESLint | 9.39.1 | Code Quality |
| **Types** | @types/react | 19.2.7 | React Type Definitions |

**Frontend DevDependencies:**
- `@vitejs/plugin-react` — Vite React Plugin
- `typescript-eslint` — TypeScript ESLint Support
- `msw` — Mock Service Worker
- `fake-indexeddb` — IndexedDB Mocking
- `jsdom` — DOM Mocking für Tests
- `autoprefixer` — CSS Vendor Prefixes

### 2.2 Backend

| Kategorie | Technologie | Version | Use Case |
|-----------|-------------|---------|----------|
| **Runtime** | Python | 3.11+ | Backend Runtime |
| **API Framework** | FastAPI | 0.134.0 | REST API mit Pydantic |
| **ASGI Server** | Uvicorn | 0.41.0 | ASGI Server (4 Workers) |
| **Database** | PostgreSQL | 16 | Primäre Datenbank |
| **DB Driver** | psycopg2-binary | 2.9.11 | PostgreSQL Adapter |
| **Migrations** | Flyway | 10-alpine | SQL-basiertes Schema-Management |
| **Auth** | python-jose | 3.5.0 | JWT Token Encoding/Decoding |
| **Auth** | argon2-cffi | 25.1.0 | Password Hashing (Argon2) |
| **Password Utils** | passlib | 1.7.4 | Password Hashing Wrapper |
| **Validation** | Pydantic | 2.12.5 | Data Validation |
| **Rate Limiting** | SlowAPI | 0.1.9 | API Rate Limiting |
| **Math** | NumPy | 2.4.2 | Numerische Berechnungen |
| **Testing** | Pytest | 7.0+ | Backend Tests |
| **Testing** | pytest-asyncio | — | Async Test Support |
| **HTTP Client** | httpx | — | Async HTTP für Tests |
| **Linting** | Ruff | (latest) | Python Linting & Formatting |

**Hinweis:** Backend verwendet **kein ORM** — direkte SQL-Abfragen mit `psycopg2` und `RealDictCursor` für typsichere Datenbank-Interaktionen.

### 2.3 Database & Persistence

| Technologie | Version | Use |
|-------------|---------|-----|
| PostgreSQL | 16 (Alpine) | Primäre relationale Datenbank |
| psycopg2-binary | 2.9.11 | Connection Pooling + Raw SQL |
| Flyway | 10-alpine | Migrations-Management |
| IndexedDB | (Browser) | Offline-Storage (Frontend) |

**Database-Architektur:**
- **Connection Pooling:** `psycopg2.pool.ThreadedConnectionPool` (min: 2, max: 10)
- **Cursor:** `RealDictCursor` für Dictionary-basierte Results
- **Migrations:** SQL-Files in `backend/db/migrations/`
- **Kein ORM:** Direkte SQL-Statements mit parametrisierten Queries

### 2.4 DevOps & Infrastructure

| Kategorie | Technologie | Use |
|-----------|-------------|-----|
| **Container** | Docker Compose | Full-Stack Orchestration |
| **Frontend Image** | nginx:alpine | Production Webserver |
| **Backend Image** | python:3.11-slim | Python Runtime |
| **DB Image** | postgres:16-alpine | PostgreSQL Database |
| **Migration** | flyway/flyway:10-alpine | DB Schema Migrations |
| **CI/CD** | GitHub Actions | Automatisierte Pipelines |
| **Reverse Proxy** | Nginx | API-Proxy zum Backend |

---

## 3. Architektur-Übersicht

### 3.1 System-Architektur (ASCII Flow)

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Browser    │  │  Capacitor   │  │   Offline (PWA)      │  │
│  │  (React 19) │  │  (Android)   │  │   IndexedDB + Workbox │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘  │
└─────────┼──────────────────┼─────────────────────┼──────────────┘
          │                  │                     │
          │ HTTPS/WSS        │                     │
          ▼                  ▼                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CDN / EDGE LAYER                           │
│              Nginx (Reverse Proxy + Static Files)                │
└─────────┬───────────────────────────────────────┬───────────────┘
          │ /api/*  Proxy                        │ /*
          ▼                                       ▼
┌─────────────────────┐               ┌─────────────────────────┐
│    BACKEND LAYER    │               │    FRONTEND (Static)    │
│  ┌───────────────┐  │               │  ┌───────────────────┐  │
│  │  FastAPI      │  │               │  │  React 19 + Vite  │  │
│  │  Uvicorn x4   │  │               │  │  Production Build │  │
│  └───────┬───────┘  │               │  └───────────────────┘  │
│          │          │               └─────────────────────────┘
│  ┌───────▼───────┐  │
│  │   Services    │  │
│  │  (Business    │  │
│  │   Logic)      │  │
│  └───────┬───────┘  │
│          │          │
│  ┌───────▼───────┐  │
│  │  Analytics    │  │
│  │  (Metrics)    │  │
│  └───────┬───────┘  │
│          │          │
│  ┌───────▼───────┐  │
│  │Infrastructure │  │
│  │(psycopg2 +    │  │
│  │ RealDictCursor│  │
│  └───────┬───────┘  │
└──────────┼──────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────┐
│                       DATA LAYER                                │
│  ┌─────────────────────┐      ┌─────────────────────────────┐  │
│  │   PostgreSQL 16      │      │   Migrations (Flyway SQL)   │  │
│  │   Connection Pool    │      │   Version-controlled Schema│  │
│  └─────────────────────┘      └─────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Backend Layer Architecture

```
app/
├── api/              # FastAPI Routes (HTTP Endpoints)
│   └── main.py       # App Factory + Middleware
├── services/         # Business Logic Layer
├── analytics/        # Deterministic Metric Engine
├── infrastructure/  # Database Repository Layer
│   ├── connection.py # psycopg2 Connection Pool
│   ├── schema.py     # DB Init/Health Check
│   └── *repo.py      # Repositories (User, Training, etc.)
├── core/             # Domain: Ontology, Mappings, Normalization
├── importers/        # CSV Data Import
└── auth/             # JWT Security + Dependencies
    ├── security.py   # JWT, Argon2, Refresh Tokens
    └── dependencies.py # OAuth2 Bearer Auth
```

**Schlüssel-Architekturentscheidungen:**
- **Kein ORM:** Direkte SQL-Queries mit parametrisiertem Connection-Pool
- **Layered Architecture:** Klare Trennung API → Services → Infrastructure
- **Deterministic Analytics:** AI-freie Metrik-Berechnung
- **Hybrid Classification:**Embedding + Rule-based Exercise Normalization

---

## 4. CI/CD Pipeline

### 4.1 Pipeline-Übersicht (GitHub Actions)

```
┌─────────────────────────────────────────────────────────────────┐
│                     CI/CD TRIGGER                               │
│         Push (main/master/develop) oder Pull Request             │
└─────────────────────────────┬───────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │ FRONTEND LINT   │  │  BACKEND TEST   │  │ SECURITY AUDIT  │  │
│  │ (ESLint + tsc)  │  │ (Ruff + pytest) │  │(npm audit + pip)│  │
│  └────────┬────────┘  └────────┬────────┘  └─────────────────┘  │
│           │                      │                               │
│           ▼                      ▼                               │
│  ┌─────────────────┐  ┌─────────────────┐                       │
│  │ FRONTEND TEST   │  │  PYTEST (cov)   │                       │
│  │ (Vitest + cov)  │  │                 │                       │
│  └────────┬────────┘  └────────┬────────┘                       │
│           │                      │                               │
│           ▼                      │                               │
│  ┌─────────────────┐            │                               │
│  │ FRONTEND BUILD  │            │                               │
│  │ (tsc + Vite)    │            │                               │
│  └────────┬────────┛            │                               │
│           │                      │                               │
└───────────┼──────────────────────┼───────────────────────────────┘
            │                      │
            ▼                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DEPLOY (main/master only)                     │
│          Docker Build → Container Registry → Kubernetes         │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Job-Details

| Job | Trigger | Checks | Artefakte |
|-----|---------|--------|-----------|
| `frontend-lint` | Immer | ESLint + TypeScript | — |
| `frontend-test` | Nach Lint | Vitest Coverage | coverage/ |
| `frontend-build` | Nach Test | tsc + Vite Build | dist/ |
| `backend-test` | Immer | Ruff + pytest Coverage | coverage.xml |
| `security-audit` | Immer | npm audit + pip-audit | — |
| `deploy` | main/master | Placeholder | — |

### 4.3 Technologie-Pipeline

| Stage | Tool | Config |
|-------|------|--------|
| **Frontend Lint** | ESLint 9.39.1 | `eslint.config.js` |
| **Frontend Typecheck** | TypeScript 5.9.3 | `tsc --noEmit` |
| **Frontend Test** | Vitest 4.1.0 | `vitest run --coverage` |
| **Frontend Build** | Vite 7.3.1 | `tsc -b && vite build` |
| **Backend Lint** | Ruff | `ruff check .` |
| **Backend Format** | Ruff | `ruff format --check .` |
| **Backend Test** | pytest | `pytest --cov=. --cov-report=xml` |
| **Security** | npm audit, pip-audit | Vulnerability Scanning |

---

## 5. Authentication & Authorization

### 5.1 Auth-Stack

| Komponente | Technologie | Details |
|------------|-------------|---------|
| **Token** | JWT (python-jose) | HS256 Algorithmus |
| **Access Token** | JWT | 14 Tage Default, konfigurierbar |
| **Refresh Token** | Secure Random (secrets) | 64-Byte URL-safe, SHA-256 Hash in DB |
| **Password Hashing** | Argon2 (argon2-cffi) | Via passlib CryptContext |
| **Auth Flow** | OAuth2PasswordBearer | FastAPI Security Dependency |

### 5.2 Security-Features

- **Password Hashing:** Argon2id mit automatischer Deprecation-Handhabung
- **Token Expiration:** Environment-variabel (ACCESS_TOKEN_EXPIRE_MINUTES, REFRESH_TOKEN_EXPIRE_DAYS)
- **Refresh Token:** Plain-Token an Client, nur SHA-256 Hash in DB
- **Connection Pooling:** Thread-safe psycopg2 Pool für DB-Zugriffe

---

## 6. Key Features & Besonderheiten

### 6.1 Architektur-Highlights

| Feature | Beschreibung |
|---------|--------------|
| **Hybrid Exercise Classification** | Kombination aus Embedding-basierten Ähnlichkeits-Suchalgorithmen und regelbasierten Normalisierungslogik |
| **Deterministic Analytics Engine** | AI-freie, reproduzierbare Metrik-Berechnung mit NumPy |
| **Offline-First PWA** | Workbox mit NetworkFirst (API) und CacheFirst (Static) Strategien |
| **Mobile Support** | Capacitor für Android APK-Builds aus derselben Codebasis |
| **Connection Pooling** | Thread-safe PostgreSQL Connection Pool mit Auto-Recovery |
| **Layered Architecture** | Klare Separation: API → Services → Analytics → Infrastructure |

### 6.2 Frontend-Besonderheiten

- **React 19** mit neuen Compiler-Features
- **TailwindCSS v4** mit @tailwindcss/vite Plugin
- **TanStack Query** für Server State mit Persistence
- **IndexedDB** für Offline-Datenspeicherung
- **i18next** für Deutsch/Englisch Übersetzungen
- **Framer Motion** für Animationen
- **Recharts** für Datenvisualisierung
- **dnd-kit** für Drag-and-Drop Funktionalität
- **react-body-highlighter** für Körpervisualisierung

### 6.3 Backend-Besonderheiten

- **FastAPI** mit automatischer OpenAPI-Dokumentation
- **Pydantic V2** für Request/Response Validation
- **NumPy** für effiziente numerische Berechnungen
- **Rate Limiting** via SlowAPI
- **Flyway Migrations** für versioniertes DB-Schema

---

## 7. Development & Build Commands

### 7.1 Development

```bash
# Full Stack Dev (Frontend + Backend)
npm run dev

# Frontend Only
cd frontend && npm run dev

# Backend Only
cd backend && uvicorn app.api.main:app --host 0.0.0.0 --port 8000 --reload
```

### 7.2 Build & Test

```bash
# Frontend
cd frontend
npm run build          # TypeScript + Vite Build
npm run lint           # ESLint
npm run typecheck      # TypeScript Check
npm run test:coverage  # Vitest mit Coverage

# Backend
cd backend
ruff check .           # Lint
ruff format .          # Format
pytest --cov=.         # Tests mit Coverage
```

### 7.3 Docker

```bash
# Full Stack starten
docker compose up --build

# Nur Datenbank
docker compose up db

# Database Migrations
docker compose up flyway
```

---

## 8. Versionsübersicht (Stand der Analyse)

### Frontend Key Dependencies
- React: 19.2.0
- TypeScript: 5.9.3
- Vite: 7.3.1
- TailwindCSS: 4.2.1
- TanStack Query: 5.90.21
- Recharts: 3.7.0
- Framer Motion: 12.34.5
- i18next: 25.8.17
- Workbox: 7.4.0
- Capacitor: 7.0.0
- Vitest: 4.1.0

### Backend Key Dependencies
- Python: 3.11+
- FastAPI: 0.134.0
- Uvicorn: 0.41.0
- PostgreSQL: 16
- psycopg2-binary: 2.9.11
- python-jose: 3.5.0
- argon2-cffi: 25.1.0
- Pydantic: 2.12.5
- NumPy: 2.4.2
- Flyway: 10

---

## 9. Projektstruktur

```
fitness-coaching-engine/
├── .github/
│   └── workflows/
│       ├── ci.yml           # CI/CD Pipeline
│       ├── deploy.yml       # Deployment
│       └── android-release.yml
├── backend/
│   ├── app/
│   │   ├── api/            # FastAPI Routes
│   │   ├── services/        # Business Logic
│   │   ├── infrastructure/  # DB Repos (psycopg2)
│   │   ├── analytics/       # Metrics Engine
│   │   ├── core/            # Domain Models
│   │   ├── importers/       # CSV Import
│   │   └── auth/            # JWT Security
│   ├── cli/                 # CLI Tools
│   ├── db/migrations/        # Flyway SQL
│   ├── tests/
│   ├── Dockerfile
│   └── pyproject.toml
├── frontend/
│   ├── src/
│   │   ├── api/            # Axios Clients
│   │   ├── components/     # React Components
│   │   ├── hooks/          # Custom Hooks
│   │   ├── features/       # Feature Modules
│   │   ├── store/          # Zustand Store
│   │   ├── lib/            # Utilities
│   │   ├── i18n/           # Translations
│   │   └── sw.ts           # Service Worker
│   ├── android/            # Capacitor Android
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
├── package.json            # Root Scripts
└── README.md
```

---

*Document erstellt für CV/Portfolio-Verwendung. Technologie-Versionen basieren auf package.json und requirements.txt.*
