import Text from "./Text";

// -- POLYMORPHIC COMPONENT CONCEPT
const Polymorphic = () => {
  return (
    <>
      <h3>Polymorphic Component Concept</h3>
      <Text as="h1">HEADING</Text>
      <Text as="p">PARAGRAPH</Text>
      <Text as="label">LABEL</Text>
    </>
  );
};

export default Polymorphic;
