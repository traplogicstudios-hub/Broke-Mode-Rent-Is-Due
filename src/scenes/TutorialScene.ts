import Phaser from 'phaser';
import { SCENE_KEYS } from '../game/config/sceneKeys';
import { SimpleButton } from '../ui/SimpleButton';

export class TutorialScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.TutorialScene });
  }

  create(): void {
    this.add.text(400, 90, 'How to play', {
      fontFamily: 'system-ui, Segoe UI, sans-serif',
      fontSize: '32px',
      color: '#edf2f4',
    }).setOrigin(0.5);

    const copy = [
      'Watch Money, Time, Energy, Trust, and your Rent goal.',
      'Pick a place on the map, read the card, and choose a smart path.',
      'Every stop uses a little time — plan your day!',
      'Spot tricky deals: rush pressure and “too good” promises are red flags.',
      'Reach the rent goal with energy left to celebrate.',
    ].join('\n\n');

    this.add.text(400, 200, copy, {
      fontFamily: 'system-ui, Segoe UI, sans-serif',
      fontSize: '16px',
      color: '#d7dbdf',
      align: 'center',
      wordWrap: { width: 680 },
    }).setOrigin(0.5, 0);

    const next = new SimpleButton(this, {
      x: 400,
      y: 520,
      width: 260,
      height: 48,
      fontSize: 18,
      label: 'Continue to the city map',
      onClick: () => {
        this.scene.start(SCENE_KEYS.MapScene);
      },
    });
    this.add.existing(next);
  }
}
