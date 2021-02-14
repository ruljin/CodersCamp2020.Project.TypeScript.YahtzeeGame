const LOCAL_STORAGE_SETTINGS = 'settings';

const createSettingsObject = (players: string[], style: string): { players: string[], style: string } => {
  const settings = { players, style };
  return settings;
};

const saveSettings = (players: string[], style: string): void => {
  const settings = createSettingsObject(players, style);
  saveToLocalStorage(LOCAL_STORAGE_SETTINGS, settings);
};

const saveToLocalStorage = (key: string,
  object: { players: string[], style: string }): void => {
  localStorage.setItem(key, JSON.stringify(object));
};

export default saveSettings;