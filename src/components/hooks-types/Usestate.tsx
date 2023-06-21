import { useState } from "react";

// type
interface PersonType {
  fname: string;
  lname: string;
}
// -- USESTATE HOOK
const UsestateHook = () => {
  const [person, setPerson] = useState<null | PersonType>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setPerson({
      fname: "Gowtham",
      lname: "Sampathkumar",
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setPerson({
      fname: "",
      lname: "",
    });
    setIsLoggedIn(false);
  };
  return (
    <>
    <h3>useState Hook types</h3>
      <div>
        {isLoggedIn ? (
          <>
            <h1>
              WELCOME
              <br /> {person?.fname} {person?.lname}
            </h1>
            <button onClick={handleLogout}>Signout</button>
          </>
        ) : (
          <>
            <h1>Signin to your account!</h1>
            <button onClick={handleLogin}>Signin</button>
          </>
        )}
      </div>
    </>
  );
};

export default UsestateHook;
