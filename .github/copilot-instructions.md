<!-- .github/copilot-instructions.md: Project-specific instructions for AI coding agents -->
# Copilot instructions — NextBlog Lite (concise)

Goal: help AI agents be immediately productive in this Next.js 16 + TypeScript app.

Quick facts
- **Framework:** Next.js 16 App Router (see [app/layout.tsx](app/layout.tsx#L1))
- **Styling:** Tailwind CSS (v4) and utility classes; uses `cn()` in [lib/utils.ts](lib/utils.ts#L1) to merge classes
- **State / Data:** `@tanstack/react-query` used for data fetching (look in `hooks/`)
- **Mocks:** msw handlers live in [mocks/handlers.ts](mocks/handlers.ts#L1); browser worker present at `public/mockServiceWorker.js` and configured in `package.json` (`msw.workerDirectory`).
- **Testing:** Jest + Testing Library; see [jest.config.ts](jest.config.ts#L1) and `jest.setup.ts` referenced there.

Common workflows / commands
- Start dev server: `npm run dev` (uses `next dev`) — check `package.json` scripts.
- Build: `npm run build` and `npm run start` for production serve.
- Run tests: `npm test` (Jest); use `npm run test:watch` for iterative work.
- Lint: `npm run lint`.

Project structure & important files
- App router root and global layout: [app/layout.tsx](app/layout.tsx#L1) and [app/provider.tsx](app/provider.tsx#L1).
- UI components: top-level components under `components/` with subfolders per component (tests colocated as `*.test.tsx`). Example: `components/blogBox/BlogBox.tsx`.
- Reusable UI primitives (typography, buttons, inputs) live under `components/ui/` and often export small typed components (see README references to `app/components/ui/Typography.tsx`).
- Hooks for data fetching: `hooks/` (e.g., `useBlog.ts`, `useCategories.ts`) — use React Query patterns.
- Utility helpers: `lib/utils.ts` provides `cn()` (class merging via `clsx` + `twMerge`). Prefer `cn(...)` for composing tailwind classes.

API & mocks specifics (critical)
- The codebase uses an environment variable `NEXT_PUBLIC_API_URL` inside msw handlers — ensure `.env.local` provides it when running real integration flows.
- To mock a new API endpoint: add a route to [mocks/handlers.ts](mocks/handlers.ts#L1) mirroring the real API path, and add sample data to `mocks/data.ts`.
- MSW is configured through `package.json`'s `msw.workerDirectory` and a public worker is available at `public/mockServiceWorker.js`.

Testing conventions
- Tests live beside components as `*.test.tsx` and use Testing Library helpers (see `@testing-library/react` deps).
- `jest.setup.ts` is run before tests (configured in [jest.config.ts](jest.config.ts#L1)) — put global mocks and extensions there.

Coding patterns & conventions to follow
- TypeScript + default exports for React components is common (see `BlogBox` example in `components/blogBox/BlogBox.tsx`).
- Tailwind utility-first classes are used aggressively; when composing classes programmatically, use `cn()` from [lib/utils.ts](lib/utils.ts#L1).
- Place unit/RTL tests next to components. Mock network requests in unit tests via msw handlers or jest mocks.
- Keep components folder-scoped (each component in its own folder with `Component.tsx` + optional `Component.test.tsx`).

When making changes
- Update or add mocks in `mocks/handlers.ts` when adding endpoints; keep mock shapes aligned with `mocks/data.ts`.
- For visual or UI changes, prefer editing the primitive in `components/ui/` rather than changing many pages.
- Run `npm run test` after changes to ensure no regressions; use `npm run test:watch` for TDD.

Where to look first when investigating bugs
- Layout and global state: [app/layout.tsx](app/layout.tsx#L1) and [app/provider.tsx](app/provider.tsx#L1).
- API flow & mocked responses: [mocks/handlers.ts](mocks/handlers.ts#L1) and `hooks/*` that call the API.
- Component behavior: corresponding file under `components/` (search for `data-testid` where present).

Examples (copy-paste friendly)
- Start dev: `npm run dev`
- Run tests: `npm test`
- Add mock GET endpoint (pattern):
  - Add `http.get(`${process.env.NEXT_PUBLIC_API_URL}/your-route`, () => HttpResponse.json({...}))` to `mocks/handlers.ts`.

Questions for maintainers (ask when uncertain)
- What envs are required beyond `NEXT_PUBLIC_API_URL` for local development?
- Any preferred lint rules or PR checkers not present in `package.json` that an agent should honor?

If anything here is unclear or you want additional examples (PR templates, commit message style, or automated test expectations), tell me what to add and I'll iterate.
