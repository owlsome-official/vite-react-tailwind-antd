const StorageTypes = ["localStorage", "sessionStorage", ""];
const [LocalStorageType, SessionStorageType, DefaultType] = StorageTypes;
const getMethodByStoreType = (storeType) => {
  let store = {};
  return {
    set(key, value) {
      switch (storeType) {
        case LocalStorageType:
          window.localStorage.setItem(key, JSON.stringify(value));
          break;
        case SessionStorageType:
          window.sessionStorage.setItem(key, JSON.stringify(value));
          break;
        default:
          store[key] = value;
      }
    },
    get(key) {
      switch (storeType) {
        case LocalStorageType:
          let lValue = window.localStorage.getItem(key);
          return lValue ? JSON.parse(lValue) : "";
        case SessionStorageType:
          let sValue = window.sessionStorage.getItem(key);
          return sValue ? JSON.parse(sValue) : "";
        default:
          return store[key];
      }
    },
    remove(key) {
      switch (storeType) {
        case LocalStorageType:
          window.localStorage.clear(key);
          break;
        case SessionStorageType:
          window.sessionStorage.clear(key);
          break;
        default:
          delete store[key];
      }
    },
  };
};
export const UtilsStorage = (() => ({
  LocalStorage: getMethodByStoreType(LocalStorageType),
  SessionStorage: getMethodByStoreType(SessionStorageType),
  Default: getMethodByStoreType(DefaultType),
  Use(storeType) {
    if (StorageTypes.includes(storeType)) {
      return getMethodByStoreType(storeType);
    }
    throw Error("'Use' method need to specific an 'storeType' as parameter");
  },
}))();
