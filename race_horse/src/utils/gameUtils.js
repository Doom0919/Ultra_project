import { SHAGAI_TYPES } from '../constants/gameConstants';

/**
 * Generates a random shagai throw result
 * @param {number} count - Number of shagai to throw (default: 4)
 * @returns {string[]} Array of shagai types
 */
export const generateShagaiThrow = (count = 4) => {
  return Array.from(
    { length: count },
    () => SHAGAI_TYPES[Math.floor(Math.random() * SHAGAI_TYPES.length)]
  );
};

/**
 * Calculates movement based on shagai throw result
 * @param {string[]} throwResult - Array of shagai types from throw
 * @returns {number} Number of positions to move
 */
export const calculateMovement = (throwResult) => {
  const countMori = throwResult.filter((t) => t === "mori").length;
  const countOthers = throwResult.length - countMori;
  return countOthers === 4 ? 4 : countMori;
};
