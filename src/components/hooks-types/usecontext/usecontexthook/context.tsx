import { ReactNode, createContext } from "react";
import { theme } from "./theme";

// types

// type for props children
interface childrenProps {
  children: ReactNode;
}

// -- create context
export const UserContext = createContext(theme);

// ThemeProvider Component
const ThemeProviderComponent = ({ children }: childrenProps) => {
  return <UserContext.Provider value={theme}>{children}</UserContext.Provider>;
};

export default ThemeProviderComponent;
