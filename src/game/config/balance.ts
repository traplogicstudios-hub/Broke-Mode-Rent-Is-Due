/** Core balance — kid-friendly money goals in cents (100 cents = $1). */
export const BALANCE = {
  rentGoalCents: 10_000,
  startingMoneyCents: 2_500,
  /** “6 hours” left in the day before rent is due */
  startingTimeMinutes: 6 * 60,
  startingEnergy: 80,
  startingTrust: 50,
  /** Minutes subtracted after each completed location visit */
  timePerActionMinutes: 15,
  energy: { min: 0, max: 100 },
  trust: { min: 0, max: 100 },
} as const;
