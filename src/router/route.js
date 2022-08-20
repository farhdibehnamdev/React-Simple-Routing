export const Route = function ({ path, children }) {
  const { pathname } = window.location;
  if (pathname !== path) return null;
  return children;
};
