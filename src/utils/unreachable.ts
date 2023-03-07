export const unreachable = (message?: string): Error => {
  throw new Error(message);
};
