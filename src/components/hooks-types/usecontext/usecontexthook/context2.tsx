import { ReactNode, createContext, useState } from "react";

// -- types

// 1 For Children
interface ChildrenProps {
  children: ReactNode;
}
// 2 For state
interface StateProps {
  name: string;
  email: string;
}
// For context
interface ContextProps {
  user: StateProps | null;
  setUser: React.Dispatch<React.SetStateAction<StateProps | null>>;
}

// -- context creation
export const Context = createContext<ContextProps | null>(null);
//-- method 2
const ContextProviderComponent = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<StateProps | null>(null);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export default ContextProviderComponent;
