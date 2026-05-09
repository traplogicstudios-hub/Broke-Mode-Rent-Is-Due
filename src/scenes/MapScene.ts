import Phaser from 'phaser';
import { REGISTRY_KEYS } from '../game/config/registryKeys';
import { SCENE_KEYS } from '../game/config/sceneKeys';
import { LOCATIONS } from '../game/locations/catalog';
import type { PlayerGameState } from '../game/state/types';
import { MeterHud } from '../ui/MeterBar';
import { SimpleButton } from '../ui/SimpleButton';

export class MapScene extends Phaser.Scene {
  private hud!: MeterHud;

  constructor() {
    super({ key: SCENE_KEYS.MapScene });
  }

  create(): void {
    const state = this.registry.get(REGISTRY_KEYS.gameState) as PlayerGameState;

    this.add.text(400, 72, 'City map — tap a place', {
      fontFamily: 'system-ui, Segoe UI, sans-serif',
      fontSize: '26px',
      color: '#edf2f4',
    }).setOrigin(0.5);

    this.hud = new MeterHud(this, 40, 18);
    this.hud.refresh(state);

    const startY = 140;
    const rowGap = 52;
    const leftX = 210;
    const rightX = leftX + 380;

    LOCATIONS.forEach((loc, index) => {
      const col = index % 2;
      const row = Math.floor(index / 2);
      const x = col === 0 ? leftX : rightX;
      const y = startY + row * rowGap;

      const btn = new SimpleButton(this, {
        x,
        y,
        width: 340,
        height: 44,
        fontSize: 16,
        label: loc.label,
        onClick: () => {
          this.registry.set(REGISTRY_KEYS.pendingLocationId, loc.id);
          this.scene.start(SCENE_KEYS.EventScene);
        },
      });
      this.add.existing(btn);
    });
  }
}
