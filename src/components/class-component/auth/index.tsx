import { useState } from "react";
import Private from "./Private";
import Profile from "./Profile";

// -- Auth component
const Auth = () => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <>
      <h1>COMPONENT TYPE CONCEPT</h1>
      {status ? (
        <button onClick={() => setStatus(false)}>LOGOUT</button>
      ) : (
        <button onClick={() => setStatus(true)}>LOGIN</button>
      )}

      <Private isLoggedIn={status} component={Profile} />
    </>
  );
};

export default Auth;
