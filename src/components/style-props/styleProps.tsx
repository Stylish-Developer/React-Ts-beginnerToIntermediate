import { CSSProperties } from "react";

// types
interface Props {
  styles: CSSProperties;
}

// -- css style props
const CssStyleProps = (props: Props) => {
  const { styles } = props;
  return (
    <>
      <div style={styles}> content goes here ...</div>
    </>
  );
};

export default CssStyleProps;
