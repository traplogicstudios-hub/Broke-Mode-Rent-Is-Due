export type LocationId =
  | 'home'
  | 'gig_board'
  | 'corner_store'
  | 'bus_stop'
  | 'bank_kiosk'
  | 'online_offers'
  | 'arcade'
  | 'community_center'
  | 'repair_shop'
  | 'neighbors_house';

export type ChoiceId = string;

export type EffectBundle = Partial<{
  moneyCentsDelta: number;
  timeMinutesDelta: number;
  energyDelta: number;
  trustDelta: number;
  setRentPaid: boolean;
  triggerBadDeal: boolean;
  /** Pays rent goal from savings if affordable (resolver handles math). */
  payRentIfAffordable: boolean;
}>;

export type ChoiceDefinition = {
  id: ChoiceId;
  label: string;
  effects: EffectBundle;
  resultText: string;
  tipText: string;
};

export type EventDefinition = {
  id: string;
  locationId: LocationId;
  title: string;
  body: string;
  choices: [ChoiceDefinition, ChoiceDefinition] | [ChoiceDefinition, ChoiceDefinition, ChoiceDefinition];
};

export type EndingId = 'rent_success' | 'out_of_time' | 'out_of_energy' | 'bad_deal';

export type EndingSummary = {
  endingId: EndingId;
  headline: string;
  bullets: string[];
};
