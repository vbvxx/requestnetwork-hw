import { RoutePath } from "./Routes";

export const toTitleCase = (element: string): string => {
  return element
    .split(" ")
    .map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
    .join(" ");
};

export const routePathToTitle = (route: RoutePath): string => {
  switch (route) {
    case RoutePath.Home:
      return "Home";
    case RoutePath.Employer:
      return "Employer";
    case RoutePath.Employee:
      return "Employee";
  }
};
