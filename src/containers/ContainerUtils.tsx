export const toTitleCase = (element: string): string => {
  return element
    .split(" ")
    .map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
    .join(" ");
};

export const pathToTitle = (element: string): string => {
  return toTitleCase(element.replace("/", ""));
};
