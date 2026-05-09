import Phaser from 'phaser';

export type SimpleButtonOptions = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  onClick: () => void;
  fontSize?: number;
};

/**
 * Rounded-rect style button using Graphics + Text; origin at center.
 */
export class SimpleButton extends Phaser.GameObjects.Container {
  private readonly btnWidth: number;
  private readonly btnHeight: number;
  private readonly hit: Phaser.GameObjects.Rectangle;
  private readonly label: Phaser.GameObjects.Text;
  private readonly g: Phaser.GameObjects.Graphics;

  constructor(scene: Phaser.Scene, opts: SimpleButtonOptions) {
    super(scene, opts.x, opts.y);
    const w = opts.width;
    const h = opts.height;
    const fs = opts.fontSize ?? 16;
    this.btnWidth = w;
    this.btnHeight = h;

    this.g = scene.add.graphics();
    this.drawBg(0x4a6fa5, 0xffffff);

    this.hit = scene.add
      .rectangle(0, 0, w, h, 0x000000, 0.001)
      .setInteractive({ useHandCursor: true });

    this.hit.on('pointerover', () => {
      this.drawBg(0x5c80c0, 0xffffff);
    });
    this.hit.on('pointerout', () => {
      this.drawBg(0x4a6fa5, 0xffffff);
    });
    this.hit.on('pointerdown', () => {
      opts.onClick();
    });

    this.label = scene.add
      .text(0, 0, opts.label, {
        fontFamily: 'system-ui, Segoe UI, sans-serif',
        fontSize: `${fs}px`,
        color: '#ffffff',
        align: 'center',
        wordWrap: { width: w - 16 },
      })
      .setOrigin(0.5);

    this.add([this.g, this.hit, this.label]);
    this.setSize(w, h);
  }

  private drawBg(fill: number, stroke: number): void {
    const w = this.btnWidth;
    const h = this.btnHeight;
    this.g.clear();
    const r = 10;
    this.g.fillStyle(fill, 1);
    this.g.lineStyle(2, stroke, 1);
    this.g.fillRoundedRect(-w / 2, -h / 2, w, h, r);
    this.g.strokeRoundedRect(-w / 2, -h / 2, w, h, r);
  }

  destroy(fromScene?: boolean): void {
    this.hit.removeAllListeners();
    super.destroy(fromScene);
  }
}
