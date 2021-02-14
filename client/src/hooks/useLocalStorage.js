import React, { useEffect, useState } from "react";

// Adding a Prefix so that in future we dont mix the id's of different projects
const PREFIX = "whatsapp-clone-";

// creating a func so that the id's is not vanished when refreshed hence we store the id's in Local Storage
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
