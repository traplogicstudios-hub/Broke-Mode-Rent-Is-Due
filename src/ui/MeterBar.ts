import Phaser from 'phaser';
import { formatMoneyDollars, formatTimeRemaining } from '../game/state/GameState';
import type { PlayerGameState } from '../game/state/types';

const HUD_STYLE = {
  fontFamily: 'system-ui, Segoe UI, sans-serif',
  fontSize: '14px',
  color: '#edf2f4',
} as const;

/** Compact top HUD for all core meters at 800×600 */
export class MeterHud extends Phaser.GameObjects.Container {
  private readonly money: Phaser.GameObjects.Text;
  private readonly time: Phaser.GameObjects.Text;
  private readonly energy: Phaser.GameObjects.Text;
  private readonly trust: Phaser.GameObjects.Text;
  private readonly rent: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    this.money = scene.add.text(0, 0, '', HUD_STYLE);
    this.time = scene.add.text(200, 0, '', HUD_STYLE);
    this.energy = scene.add.text(380, 0, '', HUD_STYLE);
    this.trust = scene.add.text(520, 0, '', HUD_STYLE);
    this.rent = scene.add.text(0, 22, '', HUD_STYLE);
    this.add([this.money, this.time, this.energy, this.trust, this.rent]);
    scene.add.existing(this);
  }

  refresh(state: PlayerGameState): void {
    const m = state.meters;
    this.money.setText(`Money: ${formatMoneyDollars(m.moneyCents)}`);
    this.time.setText(`Time: ${formatTimeRemaining(m.timeMinutes)}`);
    this.energy.setText(`Energy: ${Math.round(m.energy)}`);
    this.trust.setText(`Trust: ${Math.round(m.trust)}`);
    const rentLine = m.rentPaid
      ? `Rent goal: PAID`
      : `Rent goal: ${formatMoneyDollars(m.rentGoalCents)}`;
    this.rent.setText(rentLine);
  }
}
