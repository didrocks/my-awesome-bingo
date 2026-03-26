# Soc Ops — Workspace Instructions

Social Bingo for in-person mixers. React 19 + TypeScript + Tailwind CSS v4 + Vite. Deploys to GitHub Pages on push to `main`.

## Checklist (always run before done)
- [ ] `npm run lint` — no ESLint errors
- [ ] `npm run build` — TypeScript & Vite build passes
- [ ] `npm test` — all Vitest tests pass

## Commands
```bash
npm run dev    # Vite dev server, port 5173
npm run build  # tsc -b && vite build
npm run lint && npm test
```

## Architecture

`App.tsx` switches between two modes via `appMode: AppMode | null`:
- **Bingo** — `GameScreen` + `useBingoGame` — 5×5 board, click to mark, win detection
- **Card Deck** — `CardDeckScreen` + `useCardDeck` — shuffle deck, tap to flip

Key files: `src/types/index.ts` (all types), `src/data/questions.ts`, `src/utils/bingoLogic.ts` (pure functions), `src/utils/bingoLogic.test.ts`.

Conventions: types in `src/types/index.ts` · hooks hold state · pure utils in `src/utils/` · named exports per component file.

## Styling

Tailwind CSS v4 via `@theme` in `src/index.css` — see [tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md). Coffee Shop theme tokens: `--color-accent` `--color-bg` `--color-surface` `--color-marked` `--color-bingo` `--color-text-primary`. Base font: Georgia serif.

## Testing & Agents

Vitest + jsdom + `@testing-library/react`. Tests co-located in `src/utils/*.test.ts`.
Agents: `Quiz Master` (questions), `Pixel Jam` (UI), `TDD Supervisor` (TDD cycle), `UI Review`.

## Pitfalls

- `vite.config.ts` sets `base` from `VITE_REPO_NAME` env var (GitHub Pages)
- Board index `12` is always the free center space
- Do not import types from `src/utils/bingoLogic.ts` — use `src/types/index.ts`
