import Button from "./Button";
import Input from "./Input";

const WrappingElement = () => {
  return (
    <>
      <Button variant="primary" onClick={() => console.log("Clicked")}>
        Button
      </Button>
      <Input placeholder="write down here..." />
    </>
  );
};

export default WrappingElement;
