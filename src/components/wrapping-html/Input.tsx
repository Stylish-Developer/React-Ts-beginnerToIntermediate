// -- types
type Props = React.ComponentProps<"input">;
const Input = (props: Props) => {
  return (
    <>
      <br />
      <label htmlFor="textinput">TextInput:</label>
      <br />
      <input id="textinput" {...props} />
    </>
  );
};

export default Input;
