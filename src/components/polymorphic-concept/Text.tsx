// -- type
type Props = {
  children: string;
  as?: React.ElementType;
};
const Text = ({ children, as }: Props) => {
  const Component = as || "div";
  return (
    <>
      <Component>{children}</Component>
    </>
  );
};

export default Text;
