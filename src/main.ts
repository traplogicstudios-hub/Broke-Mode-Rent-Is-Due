import './styles/global.css';
import Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from './game/config/phaser';
import { BootScene } from './scenes/BootScene';
import { EndingScene } from './scenes/EndingScene';
import { EventScene } from './scenes/EventScene';
import { MapScene } from './scenes/MapScene';
import { TitleScene } from './scenes/TitleScene';
import { TutorialScene } from './scenes/TutorialScene';

// Single game instance for Vite HMR (avoids duplicate canvases on reload)
const w = globalThis as unknown as { __rentIsDueGame?: Phaser.Game };
if (!w.__rentIsDueGame) {
  w.__rentIsDueGame = new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: '#2b2d42',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      parent: 'game-container',
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
    },
    scene: [BootScene, TitleScene, TutorialScene, MapScene, EventScene, EndingScene],
  });
}
