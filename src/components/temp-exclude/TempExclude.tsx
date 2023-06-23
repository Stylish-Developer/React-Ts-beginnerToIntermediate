type Horizontal = "Left" | "Center" | "Right";

type Vertical = "Top" | "Center" | "Bottom";

type Props = {
  position?: Exclude<`${Horizontal}-${Vertical}`, "Center-Center">; // purpose = remove a singleor multiple members from the union
};
// -- Temp Exclude
const TempExclu = (props: Props) => {
  return (
    <>
      <div>
        <h4>Your Toast Message Position: {props.position}</h4>
      </div>
    </>
  );
};

export default TempExclu;
