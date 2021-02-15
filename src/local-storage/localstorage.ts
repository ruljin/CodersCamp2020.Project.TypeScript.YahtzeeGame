const LOCAL_STORAGE_SETTINGS = 'settings';
const LOCAL_STORAGE_SCORES = 'scores';

interface Settings {
  players: string[],
  style: string
}

interface Scores {
  nickname: string,
  points: number
}

const saveToLocalStorage = (key: string, object: { players: string[], style: string }): void => {
  localStorage.setItem(key, JSON.stringify(object));
};

const createSettingsObject = (players: string[], style: string): { players: string[], style: string } => {
  const settings = { players, style };
  return settings;
};

const saveSettings = (players: string[], style: string): void => {
  const settings = createSettingsObject(players, style);
  saveToLocalStorage(LOCAL_STORAGE_SETTINGS, settings);
};

const getSettingsFromLocalStorage = (): Settings | null => {
  if (localStorage.getItem(LOCAL_STORAGE_SETTINGS) === null) return null;
  else {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SETTINGS)!);
  }
};

const removeSettingsFromLocalStorage = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_SETTINGS);
};

const saveScores = (data: Scores[]): void => {
  localStorage.setItem(LOCAL_STORAGE_SCORES, JSON.stringify(data));
};

const getScoresFromLocalStorage = (): Scores[] => {
  if (localStorage.getItem(LOCAL_STORAGE_SCORES) === null) return [];
  else {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SCORES)!);
  }
};

export default {saveSettings, getSettingsFromLocalStorage, saveScores, getScoresFromLocalStorage, removeSettingsFromLocalStorage};