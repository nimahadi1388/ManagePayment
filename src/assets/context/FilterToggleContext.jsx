import { createContext } from "react";

export const FilterToggleContext = createContext({
  filterToggle: [],
  setFilterToggle: () => {},
});
