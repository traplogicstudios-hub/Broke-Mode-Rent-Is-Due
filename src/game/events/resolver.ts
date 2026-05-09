import { BALANCE } from '../config/balance';
import { clampMeters } from '../state/GameState';
import type { PlayerGameState } from '../state/types';
import type { ChoiceDefinition } from './types';

export type ResolveOutput = {
  nextState: PlayerGameState;
};

/**
 * Applies choice effects, optional rent payment, clamps meters, then subtracts the global time cost for visiting a location.
 */
export function resolveChoice(
  state: PlayerGameState,
  choice: ChoiceDefinition,
  timeCostMinutes: number = BALANCE.timePerActionMinutes,
): ResolveOutput {
  let meters = { ...state.meters };
  const e = choice.effects;

  if (e.moneyCentsDelta) meters.moneyCents += e.moneyCentsDelta;
  if (e.timeMinutesDelta) meters.timeMinutes += e.timeMinutesDelta;
  if (e.energyDelta) meters.energy += e.energyDelta;
  if (e.trustDelta) meters.trust += e.trustDelta;

  if (e.payRentIfAffordable) {
    if (meters.moneyCents >= meters.rentGoalCents) {
      meters.moneyCents -= meters.rentGoalCents;
      meters.rentPaid = true;
    }
  }

  if (e.setRentPaid) {
    meters.rentPaid = true;
  }

  meters = clampMeters(meters);

  meters.timeMinutes -= timeCostMinutes;
  meters = clampMeters(meters);

  const badDealTriggered = state.badDealTriggered || Boolean(e.triggerBadDeal);

  return {
    nextState: {
      meters,
      badDealTriggered,
    },
  };
}
