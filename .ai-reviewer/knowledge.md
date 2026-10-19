# rcb-websiteshadowfox reviewer notes

## Architecture
This is a Create React App React 18 single-page fan site for Royal Challengers Bengaluru. `src/App.js` owns the `BrowserRouter`, shared header/footer, route definitions, and global AOS initialization; page-level UI lives under `src/pages`, reusable UI under `src/components`, and static content under `src/data`. Styling is imported globally from `src/index.js` via `index.css` and `styles.css`.

## Conventions
- Use React function components and hooks; components are default-exported, e.g. `PlayerCard` and `StatsChart`.
- Add pages as route components in `src/pages` and register them explicitly in both the navbar and `<Routes>` in `src/App.js`.
- Keep mock/static content in `src/data` and import it into pages, as `News.jsx` imports `../data/news` and `Schedule.jsx` imports `../data/schedule`.
- Reuse the existing visual vocabulary: `container`, `section-title`, `grid`, `card`, `cta`, `badge`, and `schedule-item` class names. Existing reusable cards also carry AOS attributes such as `data-aos="fade-up"` (`src/components/PlayerCard.jsx`).
- Use asset paths rooted at `/assets/...`, matching `src/data/players.js` and the logo reference in `src/App.js`; do not convert these to relative module imports without checking the public asset layout.
- Chart components must register required Chart.js scales/elements before rendering. `src/components/StatsChart.jsx` registers `CategoryScale`, `LinearScale`, `BarElement`, and plugins at module scope.
- The project is run and built through CRA scripts in `package.json` (`npm start`, `npm run build`, `npm test`).

## Intentional non-standard choices
- This is a client-only/static demonstration site: schedules, news, player data, and statistics are hardcoded in `src/data` or page components rather than fetched from an API.
- Fan messages intentionally use browser-only persistence through `localStorage` under the `rcb_msgs` key in `src/pages/FanZone.jsx`; failed or unavailable storage is handled by returning an empty list.
- AOS is initialized once in `App` with `{duration:800, once:true}` and individual elements opt in using `data-aos`; this is intentional rather than page-specific animation setup.
- Several simple layout or color rules are inline styles, for example in `FanZone.jsx`, `News.jsx`, and `Schedule.jsx`.

## Watch out for
- Preserve route paths exactly (`/team`, `/schedule`, `/stats`, `/news`, `/fanzone`) when changing navigation or adding links.
- Flag missing or incorrectly named public assets: player image filenames in `src/data/players.js` include spaces, capitalization differences, and apparent typos.
- `FanZone.jsx` renders stored message text directly; if persistence or rendering is changed, retain safe React escaping and validate malformed `localStorage` JSON.
- Avoid using array indexes as keys when data gains stable identifiers; current news, schedule, and message lists use `key={i}`.
- Verify date and roster updates in the static data files; `src/data/schedule.js` contains fixed 2025 fixtures and `Stats.jsx` contains fixed contributor values.