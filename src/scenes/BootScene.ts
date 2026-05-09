import Phaser from 'phaser';
import { SCENE_KEYS } from '../game/config/sceneKeys';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.BootScene });
  }

  create(): void {
    this.scene.start(SCENE_KEYS.TitleScene);
  }
}
