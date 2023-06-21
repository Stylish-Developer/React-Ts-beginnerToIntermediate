import { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <h4>Dom Ref</h4>
      INPUT: <input type="text" ref={inputRef} />
    </>
  );
};

export default DomRef;
