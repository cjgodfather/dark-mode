import React, { useState } from "react";

export const useLocalStorage = (key, initValue) => {
  const valueStored = window.localStorage.getItem(key);
  console.log(valueStored);
  const [storedValue, setStoreValue] = useState(
    valueStored ? JSON.parse(valueStored) : initValue
  );
  console.log(storedValue);
  const setValue = value => {
    setStoreValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
