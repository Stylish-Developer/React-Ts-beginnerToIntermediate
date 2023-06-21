import { ChangeEvent, Dispatch, MouseEvent } from "react";

// types
interface Props {
  value: string;
  onClick: (e: MouseEvent<HTMLButtonElement>, count: number) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setValue: Dispatch<string>;
}

// -- Event Props
const EventTypeProps = (props: Props) => {
  const { value, onClick, onChange, setValue } = props;
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(value);
            setValue("");
          }}
        >
          <label htmlFor="comments">Comments</label>&nbsp;
          <input name="comments" value={value} onChange={onChange} />
          &nbsp;
          <button type="submit">submit</button>
        </form>
        <button onClick={(e) => onClick(e, 1)}>
          click and go to console to see op
        </button>
      </div>
    </>
  );
};

export default EventTypeProps;
