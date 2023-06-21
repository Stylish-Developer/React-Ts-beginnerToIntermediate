import { ChangeEvent, MouseEvent, useState } from "react";
import EventTypeProps from "./EventProps";

// -- EVENT PROPS COMPONENT
const EventProps = () => {
  const [value, setValue] = useState<string>("");

  const handleClick = (
    e: MouseEvent<HTMLButtonElement>,
    count: number
  ): void => {
    console.log("button clicked", e, count);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2>Event Props</h2>
      <EventTypeProps
        value={value}
        setValue={setValue}
        onChange={handleChange}
        onClick={handleClick}
      />
    </>
  );
};

export default EventProps;
