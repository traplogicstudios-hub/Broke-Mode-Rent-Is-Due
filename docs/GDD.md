# Rent Is Due — Game Design Document

## Project Overview

**Game Title:** Rent Is Due  
**Genre:** Financial adventure / strategy choice game  
**Platform:** Browser game  
**Target Format:** 800x600 playable web build  
**Target Audience:** Kids, families, students, and casual players  
**Tone:** Fun, light, encouraging, colorful, and kid-friendly  
**Project Goal:** Build a polished, replayable financial literacy game for the Coolmath Game Jam 2026.

## One-Sentence Pitch

**Rent Is Due** is a kid-friendly financial adventure game where players help Zee earn enough money before the day ends by making smart choices, managing time and energy, and avoiding tricky deals.

## Core Design Pillars

### Fun First, Learning Through Choices
The game should not feel like homework. Players learn by seeing the results of their decisions.

### Simple Systems, Meaningful Consequences
The player only manages a few meters, but every choice should matter.

### Kid-Friendly Financial Literacy
The game teaches money basics without fear, shame, or adult-heavy themes.

### Small Scope, High Polish
The game should be tight, readable, smooth, and complete rather than huge and unfinished.

### Replayable Runs
Each run should be short enough to replay and improve.

## Theme Connection

The game fits the **Break the Bank** theme by making the player protect their money plan from bad deals, impulse spending, time pressure, and poor choices.

> Do not let the day break your bank. Make a plan, earn smart, spend wisely, and reach the goal.

## Main Character

### Zee

Zee is a young city explorer helping out at home. Zee has one evening to collect enough money before rent is due.

Traits:
- Helpful
- Clever
- Curious
- Responsible
- Still learning

## Core Gameplay Loop

1. Player starts at Home.
2. Player sees their goal and meters.
3. Player chooses a city location.
4. Location presents a short event.
5. Player chooses from 2–3 options.
6. Meters update.
7. Player receives a short result and money tip.
8. Time passes.
9. Player continues until rent is paid or the day ends.
10. Player receives an ending based on performance.

## Default MVP Values

- Rent Goal: $100
- Starting Money: $25
- Starting Time: 6 hours
- Starting Energy: 80
- Starting Trust: 50

## Core Meters

### Money
Available cash used for rent, food, transport, repairs, and emergencies.

### Time
The evening countdown. Every action costs time.

### Energy
Zee's stamina. Work, walking, and skipping food lower energy.

### Trust
Responsibility, reputation, and smart decision-making.

### Rent Goal
The target amount required to complete the run.

## MVP Locations

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

## Ending Conditions

### Best Ending: Rent Paid + Money Smart
Player pays rent and still has strong remaining stats.

### Basic Ending: Rent Paid
Player pays rent but barely makes it.

### Short on Rent
Time runs out without enough money.

### Tricky Deal Ending
Player loses too much money or trust from scams and bad deals.

### Burnout Ending
Energy reaches zero.

## Starter Event Cards

### Dog Walking Job
Location: Gig Board  
Concept: Earning money, trust

Setup: A neighbor needs someone to walk two excited dogs.

Choices:
1. Take the job — +$20, -1 hour, -15 energy
2. Ask about tomorrow too — +$15, -1 hour, -10 energy, +10 trust
3. Skip it — No change

Tip: Trust can lead to better opportunities later.

### Snack Choice
Location: Corner Store  
Concept: Needs vs wants

Setup: Zee is hungry at the corner store.

Choices:
1. Buy a meal — -$8, +25 energy
2. Buy candy — -$4, +5 energy
3. Save money — -10 energy

Tip: The cheapest choice is not always the smartest choice.

### Fake Prize Text
Location: Online Offers  
Concept: Scam awareness

Setup: A message says: “You won $100! Pay $5 to claim it!”

Choices:
1. Pay the fee — -$5, -10 trust
2. Delete the message — +5 trust
3. Check for red flags — +10 trust

Tip: Real prizes do not ask you to pay first.

### Bus or Walk
Location: Bus Stop  
Concept: Time vs money

Setup: A job is across town.

Choices:
1. Take the bus — -$3, -15 minutes
2. Walk — -1 hour, -20 energy
3. Skip the job — No change

Tip: Sometimes spending a little saves something valuable.

### Arcade Contest
Location: Arcade  
Concept: Fun spending limits

Setup: The arcade has a skill contest. Entry is $5.

Choices:
1. Play once — -$5, -30 minutes, possible skill reward
2. Skip it — +5 trust
3. Watch first — -15 minutes, learn if the prize is worth it

Tip: Fun is fine when it fits the plan.

### Free Workshop
Location: Community Center  
Concept: Learning unlocks opportunity

Setup: The community center has a free money workshop.

Choices:
1. Attend — -30 minutes, +15 trust
2. Ask about jobs — -15 minutes, unlock a gig
3. Skip — No change

Tip: Good information can save you money later.

### Broken Scooter
Location: Repair Shop  
Concept: Preventive spending

Setup: Zee’s scooter starts making a clanky sound.

Choices:
1. Fix it now — -$12, travel gets faster
2. Ignore it — Possible breakdown later
3. Ask repair cost — -15 minutes

Tip: Small fixes can prevent big problems.

### Grocery Help
Location: Neighbor’s House  
Concept: Trust and community

Setup: Ms. Rivera needs help carrying groceries.

Choices:
1. Help for free — -30 minutes, +10 trust
2. Ask for $5 — +$5, -5 trust
3. Say no politely — No change

Tip: Helping people can build trust, even when money is not instant.

### Flash Sale
Location: Corner Store  
Concept: Sale traps

Setup: A store sign says: “Today only! Cool sneakers half off!”

Choices:
1. Buy them — -$30, +5 happiness, harder rent goal
2. Walk away — +10 trust
3. Set a reminder for later — No money lost

Tip: A sale still costs money.

### Extra Shift
Location: Gig Board  
Concept: Work vs energy

Setup: A shop owner needs help stocking shelves.

Choices:
1. Work the shift — +$25, -1 hour, -20 energy
2. Negotiate shorter shift — +$15, -30 minutes, -10 energy, +5 trust
3. Pass — No change

Tip: More money is good, but time and energy matter too.

## Writing Style Guide

Use simple, encouraging, kid-safe language.

Use:
- Money plan
- Smart choice
- Tricky deal
- Red flag
- Save
- Spend
- Earn
- Goal
- Time
- Energy
- Trust
- Rent

Avoid:
- Poverty
- Eviction
- Debt spiral
- Financial ruin
- Bankruptcy
- Desperate
- Failure
- Shame-based wording

## MVP Scope

Must-have:
- Start screen
- Tutorial screen
- City map
- Five meters: money, time, energy, trust, rent goal
- Eight clickable locations minimum
- At least 20 event cards
- Choice/result system
- Three endings minimum
- Restart button
- Basic sound effects
- Kid-friendly visual style

Do not build for jam MVP:
- Complex inventory
- Full RPG combat
- Advanced credit system
- Multiplayer
- Long story campaign
- Real investment simulation
- Large open world

## Current Locked Direction

**Title:** Rent Is Due  
**Genre:** Financial adventure / strategy choice game  
**Main Character:** Zee  
**Core Goal:** Earn enough money before time runs out  
**Core Mechanic:** Every decision changes money, time, energy, and trust  
**Core Lesson:** Smart money choices are about balance, not just earning more  
**Tagline:** Make the money. Beat the clock. Don’t fall for tricky deals.
