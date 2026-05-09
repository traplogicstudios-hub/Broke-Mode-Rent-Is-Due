import Phaser from 'phaser';
import type { EventDefinition } from '../game/events/types';

export type EventCardLayer = {
  title: Phaser.GameObjects.Text;
  body: Phaser.GameObjects.Text;
  destroy: () => void;
};

/** Title + wrapped body for an event card at fixed layout coordinates */
export function mountEventCard(
  scene: Phaser.Scene,
  event: EventDefinition,
): EventCardLayer {
  const title = scene.add.text(400, 110, event.title, {
    fontFamily: 'system-ui, Segoe UI, sans-serif',
    fontSize: '26px',
    color: '#edf2f4',
    align: 'center',
  });
  title.setOrigin(0.5, 0);

  const body = scene.add.text(400, 155, event.body, {
    fontFamily: 'system-ui, Segoe UI, sans-serif',
    fontSize: '16px',
    color: '#d7dbdf',
    align: 'center',
    wordWrap: { width: 700 },
  });
  body.setOrigin(0.5, 0);

  return {
    title,
    body,
    destroy: () => {
      title.destroy();
      body.destroy();
    },
  };
}
