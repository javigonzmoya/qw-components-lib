/**
 * Fuction clean data attributes falsy jsx
 * @param data object with attributes data posible values falsy
 * @returns clean object data with only truthy values data
 */
export const getJsxTruthyAttr = <T>(
  data: Record<string, T>
): Record<string, T> => {
  return Object.entries(data).reduce(
    (acc, [key, value]) => {
      (Boolean(value) || value === 0) && (acc[key] = value);
      return acc;
    },
    {} as Record<string, T>
  );
};
