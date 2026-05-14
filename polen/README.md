# Polen — Grant Tracker

Static dashboard hosted on GitHub Pages, data + auth in Supabase.

## One-time setup

### 1. Supabase project
1. Create a free project at https://supabase.com
2. SQL editor → paste contents of `schema.sql` → Run
3. Authentication → Users → Add user → your email + password
4. Settings → API → copy **Project URL** and **anon public** key

### 2. Local config
```
cp config.example.js config.js
```
Edit `config.js` and paste the URL + anon key. `config.js` is gitignored.

### 3. GitHub Pages deploy
1. Repo → Settings → Secrets and variables → Actions, add:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
2. Settings → Pages → Source: **GitHub Actions**
3. Push to `main` — the workflow writes `config.js` from secrets and deploys.

### 4. Import existing data
1. Open the deployed site, sign in
2. Click **⬆ Import** in the top bar
3. Select `grants-data.backup.json` from this repo
4. Data auto-saves to Supabase after 2 s

## Local dev
Any static server works:
```
python3 -m http.server 8000
```
Open http://localhost:8000

## Notes
- Single-row JSONB table (`grants_blob`) — whole array is rewritten on every save, matching the original `save.php` behavior.
- Anon key is safe to commit; Row Level Security blocks unauthenticated access.
- `grants-data.backup.json` is a snapshot for migration; live data lives in Supabase after import.
