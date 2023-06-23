// -- type
type ButtonProps = {
  children: string;
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <>
      <label htmlFor="wood">Button</label>
      <br />
      <button className={`classname-with-${variant}`} {...rest} id="wood">
        {children}
      </button>
    </>
  );
};

export default Button;
