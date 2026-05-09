export const SCENE_KEYS = {
  BootScene: 'BootScene',
  TitleScene: 'TitleScene',
  TutorialScene: 'TutorialScene',
  MapScene: 'MapScene',
  EventScene: 'EventScene',
  EndingScene: 'EndingScene',
} as const;

export type SceneKey = (typeof SCENE_KEYS)[keyof typeof SCENE_KEYS];
