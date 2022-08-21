import { useEffect, useReducer } from "react";
import { unregister, register } from "./register";

const generateId = (function () {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
})();

export const Route = function ({ path, children }) {
  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const id = generateId();
    register(id, forceUpdate);
    return () => {
      unregister(id);
    };
  }, []);

  const { pathname } = window.location;
  if (pathname !== path) return null;
  return children;
};
