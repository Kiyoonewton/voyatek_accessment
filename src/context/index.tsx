"use client";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ContextTypes = {
  value: { [key: string]: string };
  setValue: Dispatch<
    SetStateAction<{
      sideClicked: string;
    }>
  >;
};

const AppContext = createContext<ContextTypes | undefined>(undefined);

export const AppWrapper: FC<{ children: ReactNode }> = (props) => {
  let [value, setValue] = useState({
    sideClicked: "Users and Roles",
  });
  return (
    <AppContext.Provider value={{ value, setValue }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
