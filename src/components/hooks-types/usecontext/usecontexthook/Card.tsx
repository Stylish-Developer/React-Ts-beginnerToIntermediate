import { useContext } from "react";
import { UserContext } from "./context";

const Card = () => {
  const value = useContext(UserContext);
  return (
    <>
      <div
        style={{
          display: value.primary.display,
          justifyContent: value.primary.justifyContent,
          alignItems: value.primary.alignItems,
          border: value.primary.border,
          borderRadius: value.primary.borderRadius,
          height: value.primary.height,
          width: value.primary.width,
        }}
      >
        <p style={{ color: value.primary.color.txtColor }}>
          {" "}
          content goes here...
        </p>
      </div>
    </>
  );
};

export default Card;
