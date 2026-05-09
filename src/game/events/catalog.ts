import type { EventDefinition, LocationId } from './types';

export const EVENTS_BY_LOCATION: Record<LocationId, EventDefinition> = {
  home: {
    id: 'evt_home',
    locationId: 'home',
    title: 'Home base',
    body:
      'Zee checks the fridge note and the rent goal. Home is a calm place to recharge — or pay rent when the savings add up.',
    choices: [
      {
        id: 'home_rest',
        label: 'Rest and sip water (+energy)',
        effects: { energyDelta: 12, trustDelta: 2 },
        resultText: 'A short break helps Zee feel steadier.',
        tipText: 'Small resets can protect your money plan later in the day.',
      },
      {
        id: 'home_plan',
        label: 'Sketch a simple money plan (+trust)',
        effects: { trustDelta: 8, energyDelta: -4 },
        resultText: 'Zee writes three tiny steps: earn, save a slice, avoid tricky deals.',
        tipText: 'A simple plan beats rushing into noisy offers.',
      },
      {
        id: 'home_pay_rent',
        label: 'Pay rent if you have enough',
        effects: { payRentIfAffordable: true },
        resultText:
          'If savings cover the goal, Zee pays rent with an adult nearby. If not, Zee keeps saving.',
        tipText: 'Goals work best when you pay them only when the numbers truly fit.',
      },
    ],
  },

  gig_board: {
    id: 'evt_gig_board',
    locationId: 'gig_board',
    title: 'Gig Board',
    body:
      'Bright flyers offer quick neighborhood tasks. One gig pays a little cash — but everything still costs time and energy.',
    choices: [
      {
        id: 'gig_take',
        label: 'Take a quick gig (+money, tiring)',
        effects: { moneyCentsDelta: 1_800, energyDelta: -14, trustDelta: 4 },
        resultText:
          'Zee walks a friendly neighbor’s dog and earns a few dollars. Honest work feels good.',
        tipText: 'Earning usually trades time and energy — plan for both.',
      },
      {
        id: 'gig_rest',
        label: 'Catch your breath (skip pay)',
        effects: { energyDelta: 10, trustDelta: 2 },
        resultText: 'Zee rests instead of grabbing every flyer. Smart pacing!',
        tipText: 'Saving energy can keep later choices clearer.',
      },
    ],
  },

  online_offers: {
    id: 'evt_online_offers',
    locationId: 'online_offers',
    title: 'Online Offers',
    body:
      'Pop-ups sparkle with promises. One looks helpful — another tries to rush Zee into clicking fast.',
    choices: [
      {
        id: 'offer_safe',
        label: 'Pick the boring-but-real budgeting quiz (+trust)',
        effects: { trustDelta: 10, energyDelta: -4 },
        resultText:
          'Zee chooses the steady quiz from a known site. No rush. No weird asks.',
        tipText: 'Red flags: rush timers, “free money,” and weird links.',
      },
      {
        id: 'offer_tricky',
        label: 'Click “Instant cash — limited time!”',
        effects: { moneyCentsDelta: 500, triggerBadDeal: true, trustDelta: -12 },
        resultText:
          'The shiny button leads to a tricky deal. It looked exciting — but it comes with hidden strings.',
        tipText: 'If it pressures you fast, step back and ask a trusted adult.',
      },
    ],
  },

  corner_store: {
    id: 'evt_corner_store',
    locationId: 'corner_store',
    title: 'Corner Store',
    body:
      'The aisle smells like warm chips. Zee’s backpack holds today’s savings — and a snack sounds nice.',
    choices: [
      {
        id: 'store_snack',
        label: 'Buy a small snack',
        effects: { moneyCentsDelta: -250, energyDelta: 8 },
        resultText: 'A small treat boosts energy without buying the whole shelf.',
        tipText: 'Small spends are okay when they fit your goal.',
      },
      {
        id: 'store_skip',
        label: 'Skip the snack',
        effects: { trustDelta: 4 },
        resultText: 'Zee smiles and saves the dollars for rent instead.',
        tipText: 'Skipping extras is one way to save toward a goal.',
      },
    ],
  },

  bus_stop: {
    id: 'evt_bus_stop',
    locationId: 'bus_stop',
    title: 'Bus Stop',
    body:
      'The map says Zee can walk or ride. Walking saves money — riding saves time and tired legs.',
    choices: [
      {
        id: 'bus_walk',
        label: 'Walk ($0, takes more energy)',
        effects: { energyDelta: -10, trustDelta: 3 },
        resultText: 'Zee enjoys fresh air and keeps bus fare in the jar.',
        tipText: 'Sometimes saving money costs time or energy — choose what fits today.',
      },
      {
        id: 'bus_ride',
        label: 'Ride the bus (-small fare, easier day)',
        effects: { moneyCentsDelta: -200, energyDelta: 8 },
        resultText: 'The ride is smooth. Zee arrives with more pep for the next stop.',
        tipText: 'Spending a little can protect energy for earning later.',
      },
    ],
  },

  bank_kiosk: {
    id: 'evt_bank_kiosk',
    locationId: 'bank_kiosk',
    title: 'Bank Kiosk',
    body:
      'A friendly screen explains saving jars: spend, save, share. A banner warns about surprise fees on random ATMs.',
    choices: [
      {
        id: 'bank_learn',
        label: 'Try the “split your dollars” demo (+trust)',
        effects: { trustDelta: 10, energyDelta: -3 },
        resultText:
          'Zee tries the demo and learns how fees can nibble savings — ask questions anytime.',
        tipText: 'Read fee notices — surprises can shrink your goal.',
      },
      {
        id: 'bank_quick',
        label: 'Use a random ATM with flashy ads (-money)',
        effects: { moneyCentsDelta: -450, trustDelta: -6 },
        resultText:
          'Extra fees pop up like tiny paper cuts. Zee decides to plan ATM stops better next time.',
        tipText: 'Use trusted spots your grown-ups help you pick.',
      },
    ],
  },

  arcade: {
    id: 'evt_arcade',
    locationId: 'arcade',
    title: 'Arcade',
    body:
      'Lights blink and tickets flutter. Zee can play a little — or get pulled into “just one more.”',
    choices: [
      {
        id: 'arcade_small',
        label: 'Play one token game',
        effects: { moneyCentsDelta: -150, energyDelta: 6, trustDelta: 2 },
        resultText: 'One round, big smiles — then Zee walks away on purpose.',
        tipText: 'Fun fits your plan when you set a limit.',
      },
      {
        id: 'arcade_big',
        label: 'Buy the mega bundle',
        effects: { moneyCentsDelta: -1_200, energyDelta: 4, trustDelta: -4 },
        resultText:
          'The bundle was loud and shiny — and it ate a bigger slice of savings.',
        tipText: 'Bundles can hide extra spend — compare what you truly need.',
      },
    ],
  },

  community_center: {
    id: 'evt_community_center',
    locationId: 'community_center',
    title: 'Community Center',
    body:
      'Volunteers wave Zee inside. There’s a cleanup crew (+trust) or a free budgeting sticker workshop.',
    choices: [
      {
        id: 'cc_volunteer',
        label: 'Help tidy for an hour (+trust, small pay)',
        effects: { moneyCentsDelta: 900, energyDelta: -12, trustDelta: 12 },
        resultText:
          'Zee helps organize toy bins and earns a thank-you stipend. Community points!',
        tipText: 'Helping out can build trust — and sometimes small earnings too.',
      },
      {
        id: 'cc_workshop',
        label: 'Join the sticker workshop (+trust)',
        effects: { trustDelta: 10, energyDelta: -5 },
        resultText: 'Zee learns a save/spend/sort trick using stickers — simple and memorable.',
        tipText: 'Learning can be free — great for your money plan.',
      },
    ],
  },

  repair_shop: {
    id: 'evt_repair_shop',
    locationId: 'repair_shop',
    title: 'Repair Shop',
    body:
      'A squeaky wheel needs grease. Fixing it now costs money — waiting risks a bigger headache later.',
    choices: [
      {
        id: 'repair_fix',
        label: 'Fix it today (-money, +trust)',
        effects: { moneyCentsDelta: -800, trustDelta: 8, energyDelta: 4 },
        resultText:
          'The repair is fair-priced. Zee rolls away smooth and calm.',
        tipText: 'Small fixes now can avoid bigger costs later.',
      },
      {
        id: 'repair_wait',
        label: 'Wait and save more first',
        effects: { trustDelta: -2, energyDelta: -6 },
        resultText:
          'The wheel still squeaks — Zee makes a note to save up soon.',
        tipText: 'Sometimes waiting is okay — just watch for growing problems.',
      },
    ],
  },

  neighbors_house: {
    id: 'evt_neighbors_house',
    locationId: 'neighbors_house',
    title: "Neighbor's House",
    body:
      'Ms. Ruiz needs recycling sorted on the porch. Zee can lend a hand — or wave and keep moving.',
    choices: [
      {
        id: 'neighbor_help',
        label: 'Help sort recycling (+pay, uses energy)',
        effects: { moneyCentsDelta: 1_100, energyDelta: -10, trustDelta: 10 },
        resultText:
          'Zee sorts bottles and earns honest pay — plus a bright neighbor smile.',
        tipText: 'Neighbors can offer safe micro-gigs when adults agree.',
      },
      {
        id: 'neighbor_pass',
        label: 'Politely pass today',
        effects: { energyDelta: 6 },
        resultText: 'Zee waves kindly — not every day needs another task.',
        tipText: 'It’s okay to say “not today” when you need rest.',
      },
    ],
  },
};

export function getEventForLocation(locationId: LocationId): EventDefinition {
  return EVENTS_BY_LOCATION[locationId];
}
