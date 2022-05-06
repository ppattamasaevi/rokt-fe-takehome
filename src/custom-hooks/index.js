import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  return savedValue || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
