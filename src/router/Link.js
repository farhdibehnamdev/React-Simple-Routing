import { historyPushState } from "./register";
export const Link = function ({ to, children }) {
  const handleClick = function (e) {
    e.preventDefault();
    historyPushState(to);
  };
  return <a onClick={(e) => handleClick(e)}>{children}</a>;
};
