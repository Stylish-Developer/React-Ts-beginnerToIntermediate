import { ComponentType } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

// -- types
type PrivateProps = {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
};
// -- Private component
const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Gowtham" />;
  } else {
    return <Login />;
  }
};

export default Private;
