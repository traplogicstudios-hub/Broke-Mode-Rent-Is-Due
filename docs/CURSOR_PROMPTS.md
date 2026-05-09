# Rent Is Due — Cursor Prompts

## Cursor Prompt 1 — Project Skeleton

```md
You are building the first production milestone for Rent Is Due, a kid-friendly financial literacy browser game.

Stack:
- Phaser 3
- Vite
- TypeScript
- 800x600 canvas

Goal:
Create the project skeleton only. Do not build the full game yet.

Tasks:
1. Set up Vite + TypeScript + Phaser 3.
2. Configure a fixed 800x600 Phaser game canvas.
3. Create scene files:
   - BootScene
   - TitleScene
   - TutorialScene
   - MapScene
   - EventScene
   - EndingScene
4. Create folders:
   - src/data
   - src/scenes
   - src/systems
   - src/ui
   - public/assets/images
   - public/assets/audio
5. Add placeholder navigation:
   - TitleScene has a Start button.
   - Start button opens TutorialScene.
   - TutorialScene has a Continue button.
   - Continue opens MapScene.
6. Add simple placeholder styling using Phaser text and shapes.
7. Keep all text readable at 800x600.
8. Do not add external assets yet.
9. Do not add complex animations yet.
10. Make sure npm install, npm run dev, and npm run build work.

Acceptance criteria:
- Game launches in browser.
- Canvas is 800x600.
- Title -> Tutorial -> Map flow works.
- Code is organized cleanly.
- No unused complex systems.
```

## Cursor Prompt 2 — First Playable Event Loop

```md
Now implement the first playable loop for Rent Is Due.

Use the existing Phaser 3 + Vite + TypeScript skeleton.

Goal:
Create one complete playable event flow from map to event choice to result back to map.

Tasks:
1. Add a GameState system with:
   - money: 25
   - timeRemaining: 360
   - energy: 80
   - trust: 50
   - rentGoal: 100
2. Add TypeScript interfaces for:
   - GameState
   - GameEvent
   - EventChoice
   - ChoiceEffects
   - Location
3. Add a simple event data file with one event:
   - Dog Walking Job
   - Location: Gig Board
   - Choices update money, time, energy, and trust.
4. Add a simple location data file with at least:
   - Home
   - Gig Board
5. MapScene should display meters and clickable location buttons.
6. Clicking Gig Board opens EventScene with Dog Walking Job.
7. EventScene displays title, setup, choices, and tip.
8. Clicking a choice applies effects to GameState.
9. After choice, show result text and a Continue button.
10. Continue returns to MapScene with updated meters.
11. Add basic ending checks:
   - Energy <= 0 opens EndingScene with burnout ending.
   - Time <= 0 opens EndingScene with short-on-rent ending unless rent is paid.
12. Home should allow paying rent if money >= rentGoal.
13. Restart should reset GameState.

Acceptance criteria:
- Player can start, reach map, choose Gig Board, make a choice, see meters update, and continue.
- Player can pay rent at Home if they have enough money.
- Game state is centralized and not duplicated across scenes.
- Event data is data-driven, not hardcoded inside the scene.
```

## Cursor Prompt 3 — Expand MVP Content

```md
Expand the Rent Is Due playable loop with MVP content.

Tasks:
1. Add all MVP locations from docs/GDD.md.
2. Add at least 10 event cards.
3. Route location clicks to location-specific event pools.
4. Add basic random event selection without repeating completed events too often.
5. Add money tips after each choice.
6. Add three endings:
   - Rent Paid
   - Short on Rent
   - Burnout
7. Keep placeholder art only.
8. Keep UI readable and simple.

Acceptance criteria:
- Player can complete a full run.
- Player can win or lose fairly.
- At least 10 events are playable.
- Game remains kid-friendly and readable.
```
