import RestrictingProps from "./RestrictProps";

// -- Restrict Props
const RestrictProps = () => {
  return (
    <>
      <h3>RestrictProps</h3>
      <RestrictingProps value={10} isLoggedIn  />
    </>
  );
};

export default RestrictProps;
