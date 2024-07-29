import { createContext } from "react";

export const MyContext = createContext<MyContextType>({
  data: [],
  setData: () => {},
  deleteData: [],
  setDeleteData: () => {},
});
