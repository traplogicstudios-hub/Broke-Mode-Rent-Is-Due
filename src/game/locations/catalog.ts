import type { LocationId } from './types';

export type LocationInfo = {
  id: LocationId;
  /** Short label on map buttons */
  label: string;
};

/** MVP locations — each has one authored event in `events/catalog.ts`. */
export const LOCATIONS: LocationInfo[] = [
  { id: 'home', label: 'Home' },
  { id: 'gig_board', label: 'Gig Board' },
  { id: 'corner_store', label: 'Corner Store' },
  { id: 'bus_stop', label: 'Bus Stop' },
  { id: 'bank_kiosk', label: 'Bank Kiosk' },
  { id: 'online_offers', label: 'Online Offers' },
  { id: 'arcade', label: 'Arcade' },
  { id: 'community_center', label: 'Community Center' },
  { id: 'repair_shop', label: 'Repair Shop' },
  { id: 'neighbors_house', label: "Neighbor's House" },
];
