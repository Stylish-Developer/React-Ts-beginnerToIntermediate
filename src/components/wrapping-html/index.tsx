import CustomComponent from "./CustomComponent";
import WrappingElement from "./WrappingHtml";

// -- Wrapping HTML Elements
const WrappingHtml = () => {
  return (
    <>
      <h3>Wrapping HTML Elments</h3>
      <WrappingElement />
      <CustomComponent name={"gowtham"} />
    </>
  );
};

export default WrappingHtml;
