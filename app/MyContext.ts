import { createContext, Dispatch, SetStateAction } from "react";

// Define the type for your context value
interface MyContextType {
  data: never[];
  setData: Dispatch<SetStateAction<never[]>>;
  deleteData: never[];
  setDeleteData: Dispatch<SetStateAction<never[]>>;
}

// Create the context with an initial value
export const MyContext = createContext<MyContextType>({
  data: [],
  setData: () => {},
  deleteData: [],
  setDeleteData: () => {},
});
