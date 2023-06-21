import Card from "./Card";
import ThemeProviderComponent from "./context";

const UseContextApp = () => {
  return (
    <>
      <ThemeProviderComponent>
        <Card />
      </ThemeProviderComponent>
    </>
  );
};

export default UseContextApp;
