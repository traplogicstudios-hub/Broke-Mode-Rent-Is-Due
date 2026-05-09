import Phaser from 'phaser';
import { REGISTRY_KEYS } from '../game/config/registryKeys';
import { SCENE_KEYS } from '../game/config/sceneKeys';
import { getEventForLocation } from '../game/events/catalog';
import { evaluateEnding } from '../game/events/endingEvaluator';
import { resolveChoice } from '../game/events/resolver';
import type { ChoiceDefinition } from '../game/events/types';
import type { LocationId } from '../game/locations/types';
import type { PlayerGameState } from '../game/state/types';
import { createChoiceButtons, destroyButtons } from '../ui/ChoiceList';
import { mountEventCard } from '../ui/EventCardView';
import { MeterHud } from '../ui/MeterBar';
import { SimpleButton } from '../ui/SimpleButton';

export class EventScene extends Phaser.Scene {
  private hud!: MeterHud;

  constructor() {
    super({ key: SCENE_KEYS.EventScene });
  }

  create(): void {
    const locationId = this.registry.get(REGISTRY_KEYS.pendingLocationId) as LocationId | undefined;
    if (!locationId) {
      this.scene.start(SCENE_KEYS.MapScene);
      return;
    }

    let state = this.registry.get(REGISTRY_KEYS.gameState) as PlayerGameState;
    const event = getEventForLocation(locationId);

    this.hud = new MeterHud(this, 40, 18);
    this.hud.refresh(state);

    const card = mountEventCard(this, event);
    const choices = [...event.choices] as ChoiceDefinition[];

    const layout = {
      centerX: 400,
      startY: choices.length >= 3 ? 340 : 380,
      width: 620,
      height: 46,
      gap: 12,
      fontSize: 15,
    };

    let choiceButtons: SimpleButton[] = [];
    choiceButtons = createChoiceButtons(this, choices, layout, (choice: ChoiceDefinition) => {
      destroyButtons(choiceButtons);
      card.destroy();

      const { nextState } = resolveChoice(state, choice);
      state = nextState;
      this.registry.set(REGISTRY_KEYS.gameState, state);
      this.hud.refresh(state);

      this.add.rectangle(400, 330, 760, 280, 0x1f2233, 0.94);

      this.add.text(400, 200, 'What happened', {
        fontFamily: 'system-ui, Segoe UI, sans-serif',
        fontSize: '22px',
        color: '#edf2f4',
      }).setOrigin(0.5);

      this.add.text(400, 238, choice.resultText, {
        fontFamily: 'system-ui, Segoe UI, sans-serif',
        fontSize: '16px',
        color: '#d7dbdf',
        align: 'center',
        wordWrap: { width: 680 },
      }).setOrigin(0.5, 0);

      this.add.text(400, 352, `Money tip: ${choice.tipText}`, {
        fontFamily: 'system-ui, Segoe UI, sans-serif',
        fontSize: '15px',
        color: '#ffd166',
        align: 'center',
        wordWrap: { width: 680 },
      }).setOrigin(0.5, 0);

      const cont = new SimpleButton(this, {
        x: 400,
        y: 520,
        width: 280,
        height: 48,
        fontSize: 17,
        label: 'Continue',
        onClick: () => {
          const latest = this.registry.get(REGISTRY_KEYS.gameState) as PlayerGameState;
          const ending = evaluateEnding(latest);
          if (ending) {
            this.registry.set(REGISTRY_KEYS.endingSummary, ending);
            this.scene.start(SCENE_KEYS.EndingScene);
          } else {
            this.scene.start(SCENE_KEYS.MapScene);
          }
        },
      });
      this.add.existing(cont);
    });
  }
}
