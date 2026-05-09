export type MeterSnapshot = {
  moneyCents: number;
  timeMinutes: number;
  energy: number;
  trust: number;
  rentGoalCents: number;
  rentPaid: boolean;
};

export type RunFlags = {
  badDealTriggered?: boolean;
  reason?: 'time' | 'energy' | 'bad_deal' | 'success';
};

/** Mutable run state stored in Phaser registry */
export type PlayerGameState = {
  meters: MeterSnapshot;
  badDealTriggered: boolean;
};
