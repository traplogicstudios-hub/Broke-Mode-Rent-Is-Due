import Phaser from 'phaser';
import { REGISTRY_KEYS } from '../game/config/registryKeys';
import { SCENE_KEYS } from '../game/config/sceneKeys';
import { createInitialPlayerState } from '../game/state/GameState';
import { SimpleButton } from '../ui/SimpleButton';

export class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.TitleScene });
  }

  create(): void {
    this.add.text(400, 160, 'Rent Is Due', {
      fontFamily: 'system-ui, Segoe UI, sans-serif',
      fontSize: '44px',
      color: '#edf2f4',
    }).setOrigin(0.5);

    this.add.text(400, 240, 'Help Zee explore the city, earn smart,\nand reach the rent goal before the day ends.', {
      fontFamily: 'system-ui, Segoe UI, sans-serif',
      fontSize: '18px',
      color: '#c9ccd1',
      align: 'center',
    }).setOrigin(0.5);

    const play = new SimpleButton(this, {
      x: 400,
      y: 380,
      width: 220,
      height: 52,
      fontSize: 20,
      label: 'Play',
      onClick: () => {
        this.registry.set(REGISTRY_KEYS.gameState, createInitialPlayerState());
        this.scene.start(SCENE_KEYS.TutorialScene);
      },
    });
    this.add.existing(play);
  }
}
