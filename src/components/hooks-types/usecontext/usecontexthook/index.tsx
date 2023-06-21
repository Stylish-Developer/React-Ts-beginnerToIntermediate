import Card from "./Card";
import User from "./User";
import ThemeProviderComponent from "./context";
import ContextProviderComponent from "./context2";

const UseContextApp = () => {
  return (
    <>
      <h2>Method 1</h2>
      <ThemeProviderComponent>
        <Card />
      </ThemeProviderComponent>
      <h2>Method 2</h2>
      <ContextProviderComponent>
        <User />
      </ContextProviderComponent>
    </>
  );
};

export default UseContextApp;
