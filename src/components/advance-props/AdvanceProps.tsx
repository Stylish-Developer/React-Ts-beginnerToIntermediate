import { ChildrenAsComponentProps } from "./propsTypes";

const AdvancePropsType = (props: ChildrenAsComponentProps) => {
  const { children } = props;
  return <>{children}</>;
};

export default AdvancePropsType;
