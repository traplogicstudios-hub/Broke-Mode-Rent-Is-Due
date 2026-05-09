# Claude Architecture Prompt

Copy this into Claude before Cursor starts coding.

```md
You are acting as a senior game architect and technical lead for a small browser-based game jam project.

Project: Rent Is Due

We are building a kid-friendly financial literacy game for the Coolmath Game Jam 2026. The game must be browser-playable, polished, simple, readable, and scoped tightly enough to finish. The intended stack is Phaser 3 + Vite + TypeScript. The game should run at 800x600.

Important: This is a financial literacy game, but it should feel like a fun city adventure, not homework and not a stressful simulator. The tone must stay kid-friendly, encouraging, and simple.

Core game: Rent Is Due is a financial adventure / strategy choice game where players help Zee earn enough money before the day ends by exploring city locations, taking small gigs, avoiding tricky deals, managing time and energy, and making smart money decisions.

Main character: Zee, a young city explorer helping out at home.

Core meters:
- Money
- Time
- Energy
- Trust
- Rent Goal

Default starting values:
- Rent Goal: $100
- Starting Money: $25
- Starting Time: 6 hours
- Starting Energy: 80
- Starting Trust: 50

Core gameplay loop:
1. Start at title screen.
2. Show tutorial.
3. Show city map.
4. Player chooses a location.
5. Location presents an event card.
6. Player chooses from 2–3 options.
7. Meters update.
8. Result text and money tip display.
9. Time passes.
10. Player continues until rent is paid, time runs out, energy reaches zero, or a bad-deal condition triggers.
11. Ending screen summarizes the run.

MVP locations:
- Home
- Gig Board
- Corner Store
- Bus Stop
- Bank Kiosk
- Online Offers
- Arcade
- Community Center
- Repair Shop
- Neighbor’s House

Required scenes:
- BootScene
- TitleScene
- TutorialScene
- MapScene
- EventScene
- EndingScene

Required systems:
- GameState system
- EventResolver system
- Balance constants
- Event data model
- Location data model
- Ending evaluator
- UI components for meters, event cards, choices, and buttons

Design constraints:
- Keep the first milestone extremely small.
- Do not over-engineer.
- Prioritize one fully playable loop before adding polish.
- Use placeholder shapes/text first. Art can come later.
- Keep UI readable at 800x600.
- Avoid inventory, RPG combat, multiplayer, real investing systems, or advanced credit logic.

Kid-friendly rules:
Avoid shame-based wording and heavy adult financial language. Use words like money plan, smart choice, tricky deal, red flag, save, spend, earn, goal, time, energy, trust, and rent.

Your task:
Create a technical architecture plan for this Phaser 3 + Vite + TypeScript project.

Please output:
1. Recommended folder structure.
2. Scene responsibilities.
3. Core TypeScript interfaces/types.
4. State flow diagram in text form.
5. First playable milestone plan.
6. Implementation order for Cursor.
7. Risk list and scope creep prevention.
8. A clean first Cursor prompt that creates the project skeleton.
9. A second Cursor prompt that implements the first playable event loop.
10. Phaser-specific setup notes for 800x600 browser export.

Do not write the whole game code yet. Focus on architecture, file structure, and first production prompts.
```
