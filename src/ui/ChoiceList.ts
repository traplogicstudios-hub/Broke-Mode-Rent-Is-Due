import Phaser from 'phaser';
import type { ChoiceDefinition } from '../game/events/types';
import { SimpleButton } from './SimpleButton';

export type ChoiceLayout = {
  centerX: number;
  /** Y of first button center */
  startY: number;
  width: number;
  height: number;
  gap: number;
  fontSize?: number;
};

/** Builds choice buttons; returns handles for cleanup. */
export function createChoiceButtons(
  scene: Phaser.Scene,
  choices: ChoiceDefinition[],
  layout: ChoiceLayout,
  onPick: (choice: ChoiceDefinition) => void,
): SimpleButton[] {
  const buttons: SimpleButton[] = [];
  choices.forEach((choice, index) => {
    const y = layout.startY + index * (layout.height + layout.gap);
    const btn = new SimpleButton(scene, {
      x: layout.centerX,
      y,
      width: layout.width,
      height: layout.height,
      label: choice.label,
      fontSize: layout.fontSize,
      onClick: () => {
        onPick(choice);
      },
    });
    scene.add.existing(btn);
    buttons.push(btn);
  });
  return buttons;
}

export function destroyButtons(buttons: SimpleButton[]): void {
  buttons.forEach((b) => b.destroy());
}
