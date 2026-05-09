import type { PlayerGameState } from '../state/types';
import type { EndingId, EndingSummary } from './types';

export function evaluateEnding(state: PlayerGameState): EndingSummary | null {
  const { meters, badDealTriggered } = state;

  if (meters.rentPaid) {
    return makeEnding('rent_success');
  }
  if (badDealTriggered) {
    return makeEnding('bad_deal');
  }
  if (meters.timeMinutes <= 0) {
    return makeEnding('out_of_time');
  }
  if (meters.energy <= 0) {
    return makeEnding('out_of_energy');
  }
  return null;
}

function makeEnding(endingId: EndingId): EndingSummary {
  switch (endingId) {
    case 'rent_success':
      return {
        endingId,
        headline: 'Rent paid — nice teamwork!',
        bullets: [
          'You made a money plan and reached your goal.',
          'Smart choices + pacing helped Zee help out at home.',
        ],
      };
    case 'bad_deal':
      return {
        endingId,
        headline: 'Tricky deal spotted too late',
        bullets: [
          'Some offers have red flags — like “free money” or rush pressure.',
          'Next run: pause, ask a trusted adult, and pick the safer path.',
        ],
      };
    case 'out_of_time':
      return {
        endingId,
        headline: 'The day ran out',
        bullets: [
          'Time is part of your money plan.',
          'Try planning routes and picking fewer draining stops next time.',
        ],
      };
    case 'out_of_energy':
      return {
        endingId,
        headline: 'Zee needs a rest',
        bullets: [
          'Energy matters — breaks can protect your plan.',
          'Balance earning with recovery so you can keep making smart choices.',
        ],
      };
    default: {
      const _exhaustive: never = endingId;
      return _exhaustive;
    }
  }
}
