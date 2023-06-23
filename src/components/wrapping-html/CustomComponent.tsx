import StringProps from "../typing-props/stringProps";

const CustomComponent = (props: React.ComponentProps<typeof StringProps>) => {
  return (
    <>
      <h2>Extracting a components Props type concept</h2>
      <p>the below data Extracting from BasicTypeProps component</p>
      <h3>DATA: {props.name}</h3>
    </>
  );
};

export default CustomComponent;
