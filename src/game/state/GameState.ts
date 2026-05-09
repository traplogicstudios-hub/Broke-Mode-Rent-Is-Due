import { BALANCE } from '../config/balance';
import type { MeterSnapshot, PlayerGameState } from './types';

export function createInitialPlayerState(): PlayerGameState {
  return {
    meters: createInitialMeters(),
    badDealTriggered: false,
  };
}

export function createInitialMeters(): MeterSnapshot {
  return {
    moneyCents: BALANCE.startingMoneyCents,
    timeMinutes: BALANCE.startingTimeMinutes,
    energy: BALANCE.startingEnergy,
    trust: BALANCE.startingTrust,
    rentGoalCents: BALANCE.rentGoalCents,
    rentPaid: false,
  };
}

export function clampMeters(m: MeterSnapshot): MeterSnapshot {
  return {
    ...m,
    moneyCents: Math.max(0, m.moneyCents),
    timeMinutes: Math.max(0, m.timeMinutes),
    energy: clamp(m.energy, BALANCE.energy.min, BALANCE.energy.max),
    trust: clamp(m.trust, BALANCE.trust.min, BALANCE.trust.max),
    rentGoalCents: Math.max(0, m.rentGoalCents),
    rentPaid: m.rentPaid,
  };
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

/** Format cents as $12.34 */
export function formatMoneyDollars(cents: number): string {
  const neg = cents < 0;
  const abs = Math.abs(Math.round(cents));
  const dollars = Math.floor(abs / 100);
  const cc = abs % 100;
  const sign = neg ? '-' : '';
  return `${sign}$${dollars}.${cc.toString().padStart(2, '0')}`;
}

/** Show remaining time as “5h 30m” */
export function formatTimeRemaining(totalMinutes: number): string {
  const m = Math.max(0, Math.floor(totalMinutes));
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (h <= 0) return `${r}m`;
  return `${h}h ${r}m`;
}
