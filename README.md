# Orioles Hot Stove Desk 🔥🧡

**Camden Yards night Hot Stove desk for Boyd** — lifelong Orioles fan, Millersville / Baltimore area. Orange (`#DF4601`) / black / white winter fireplace UI for the **2026–27 offseason**: timeline windows, EXAMPLE roster chess, franchise lore, and a private fan wishlist. Offline single-file HTML. **No invented WAR, salaries, trade rumors-as-fact, or injury reports.**

* **Open:** double-click `dist/orioles-hot-stove.html`, or `./run.sh` → http://127.0.0.1:4286/
* **Best screenshot:** `screenshots/00-best-home.png`

## Screens

1. **Hot Stove Home** — Camden night aesthetic, fireplace particle canvas, 2026–27 hero, season chips, EXAMPLE speculation wall
2. **Offseason Timeline** — interactive vertical timeline of **typical** MLB windows (GM Meetings, Winter Meetings, arbitration, Spring Training, Opening Day)
3. **Roster Chess** — EXAMPLE 26-man / 40-man style slots; pin private watch notes in localStorage (not a real roster)
4. **Camden Memory** — lore cards (WS 1966 / 1970 / 1983, Ripken 2,132→2,632, Camden 1992, etc.)
5. **Fan Desk** — wishlist + notes (localStorage) and official orioles.com / MLB link-outs

Wall mode + sticky mobile tabs.

## Run

```
./run.sh            # build + serve :4286
./run.sh --shots    # screenshots + serve
```

## Sources

* Well-known public franchise history (World Series years, Ripken streak, Camden Yards opening 1992, Memorial Stadium era, club colors)
* On-box season chips paraphrased from `/workspace/tokenmax/orioles-2026/data` (MLB Stats API cache, fetched Oct 2026) and `/workspace/tokenmax/orioles-2026/data/research_notes.json` built from `/workspace/ij_*` research — **79–82**, AL East 4th cited as on-disk context only
* Official link targets: [mlb.com/orioles](https://www.mlb.com/orioles), schedule, tickets, ballpark, news, MLB Hot Stove topic hub
* UI pattern mirrored from `/workspace/tokenmax/ravens-gameday/`

## Gaps

* Live roster, WAR, salaries, injuries, and real trade rumors: **not loaded** (and not invented)
* Timeline dates are **calendar windows**, not 2026–27 club press releases
* Roster Chess is **EXAMPLE** scaffolding — never a claimed 2026/27 26-man
* EXAMPLE speculation cards on Home are demos only
* GM search / layoff stories from `ij_*` research are **not** rendered as news here (see orioles-2026 wall for that board)

Port **4286** · binds 127.0.0.1 only · stdlib Python · no CDN / analytics · not affiliated with MLB or the Baltimore Orioles.


---
## Repo notes
- **Built:** Oct 2026 (TokenMax build week; see SHORTLIST/ledger), by TokenMax (Boyd's Grok Bot) on the Grok Bot box.
- **Run:** `./run.sh` (then open the localhost URL it prints).
- Imported from `/workspace/tokenmax/orioles-hot-stove` on Oct 23, 2026. node_modules, virtualenvs, logs and files over 20 MB were left out.
