import CssStyleProps from "./styleProps";

// -- Style Props
const StyleProps = () => {
  return (
    <>
      <h2>Style Props</h2>
      <CssStyleProps
        styles={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          height: 200,
          width: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      />
    </>
  );
};

export default StyleProps;
