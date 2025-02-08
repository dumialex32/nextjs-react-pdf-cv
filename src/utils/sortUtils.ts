const isStrictNumber = (value: any): boolean =>
  typeof value === "number" ||
  (typeof value === "string" && /^-?\d+(\.\d+)?$/.test(value));

export const sort = <T extends Record<string, any>>(
  arr: T[],
  sortDirection: "asc" | "desc",
  key?: keyof T
): T[] => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return arr;
  }

  return [...arr].sort((a, b) => {
    const valueA = key ? a[key] : a;
    const valueB = key ? b[key] : b;

    // if string representing a number or number
    if (isStrictNumber(valueA) && isStrictNumber(valueB)) {
      const numA = Number(valueA);
      const numB = Number(valueB);
      return sortDirection === "asc" ? numA - numB : numB - numA;
    }

    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortDirection === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return 0;
  });
};
