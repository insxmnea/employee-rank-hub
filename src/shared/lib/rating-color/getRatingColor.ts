export const getRatingColor = (rating: number): string => {
  const normalized = Math.max(0, Math.min(1, rating / 100));
  const r = Math.floor(255 * (1 - normalized));
  const g = Math.floor(255 * normalized);
  return `rgb(${r},${g},0)`;
};
