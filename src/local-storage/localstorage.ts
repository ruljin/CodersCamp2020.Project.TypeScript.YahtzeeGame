const LOCAL_STORAGE_SETTINGS = 'settings';

const createSettingsObject = (player: string, style: string):
{player: string, style: string} => {
  const settings = {player, style};
  return settings;
};

const saveSettings = (player: string, style: string): void => {
  const settings = createSettingsObject(player, style);
  saveToLocalStorage(LOCAL_STORAGE_SETTINGS, settings);
};

const saveToLocalStorage = (key: string,
  object: {player: string, style: string})
 : void => {
  localStorage.setItem(key, JSON.stringify(object));
};

export default saveSettings;