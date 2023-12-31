import { BasicTypesProps, StyleProps } from "./PropsTypes";

const BasicTypeProps = (props: BasicTypesProps) => {
  const {
    notification = 0,
    isLoggedIn,
    name: { firstName, lastName },
    names,
  } = props;

  const style: StyleProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  };
  return (
    <>
      {isLoggedIn ? (
        <div style={style}>
          <p>Welcome CHIEF!</p>
          <h2>🔔 New Notification {notification} </h2>
        </div>
      ) : (
        <p style={style}>Welcome guest</p>
      )}

      <div>
        <h3>FirstName: {firstName}</h3>
        <p>LastName: {lastName}</p>
      </div>
      <div style={{ marginTop: "10px" }}>
        {names.map((name) => (
          <div key={name.name}>
            <h4>
              Player Name: {name.name} Age {name.age}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default BasicTypeProps;
