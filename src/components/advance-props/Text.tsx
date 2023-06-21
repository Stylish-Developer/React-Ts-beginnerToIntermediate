import { ChildrenAsProps } from "./propsTypes";

const Text = (props: ChildrenAsProps) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default Text;
