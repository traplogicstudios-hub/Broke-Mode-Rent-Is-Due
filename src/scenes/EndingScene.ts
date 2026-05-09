import Phaser from 'phaser';
import { REGISTRY_KEYS } from '../game/config/registryKeys';
import { SCENE_KEYS } from '../game/config/sceneKeys';
import type { EndingSummary } from '../game/events/types';
import { SimpleButton } from '../ui/SimpleButton';

export class EndingScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.EndingScene });
  }

  create(): void {
    const ending = this.registry.get(REGISTRY_KEYS.endingSummary) as EndingSummary | undefined;
    const headline = ending?.headline ?? 'Run complete';
    const bullets = ending?.bullets ?? ['Thanks for playing!'];

    this.add.text(400, 120, headline, {
      fontFamily: 'system-ui, Segoe UI, sans-serif',
      fontSize: '30px',
      color: '#edf2f4',
      align: 'center',
      wordWrap: { width: 720 },
    }).setOrigin(0.5, 0);

    const body = bullets.join('\n\n');
    this.add.text(400, 220, body, {
      fontFamily: 'system-ui, Segoe UI, sans-serif',
      fontSize: '17px',
      color: '#d7dbdf',
      align: 'center',
      wordWrap: { width: 700 },
    }).setOrigin(0.5, 0);

    const restart = new SimpleButton(this, {
      x: 400,
      y: 500,
      width: 280,
      height: 50,
      fontSize: 18,
      label: 'Back to title',
      onClick: () => {
        this.scene.start(SCENE_KEYS.TitleScene);
      },
    });
    this.add.existing(restart);
  }
}
