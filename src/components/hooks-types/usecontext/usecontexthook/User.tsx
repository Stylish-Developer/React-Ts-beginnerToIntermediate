import { useContext } from "react";
import { Context } from "./context2";

const User = () => {
  const data = useContext(Context);

  const handleLogin = () => {
    if (data) {
      data.setUser({
        name: "JIN",
        email: "gowthamsampathkumar@outlook.com",
      });
    }
  };

  const handleLogout = () => {
    if (data) {
      data.setUser({
        name: "",
        email: "",
      });
    }
  };
  return (
    <>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <h3>
        user name is: {data?.user?.name} user email is : {data?.user?.email}
      </h3>
    </>
  );
};

export default User;
