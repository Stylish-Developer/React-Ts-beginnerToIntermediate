import { useEffect, useState } from "react";
import BasicTypeProps from "./BasicProps";

// -- BASIC TYPESCRIPT PROPS
const BasicProps = () => {
  // -- for boolean & number type concept
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // -- BONUS STEPS Don't worry about it here, we'll talk about it later

  setTimeout(() => {
    setIsLoggedIn(!isLoggedIn);
  }, 3000);

  // -- object type concept
  const Myname = {
    firstName: "GAUTHAM",
    lastName: "SAMPATHKUMAR",
  };

  const names = [
    { name: "Jin", age: 25 },
    { name: "Eddy", age: 50 },
    { name: "Yosimizu", age: 30 },
  ];

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <>
      <h2>Basic type props</h2>
      <BasicTypeProps
        notification={20}
        isLoggedIn={isLoggedIn}
        name={Myname}
        names={names}
      />
    </>
  );
};

export default BasicProps;
