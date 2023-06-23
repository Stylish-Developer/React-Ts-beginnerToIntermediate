import { List } from "./GenericProps";

// -- Generic Component
const Generic = () => {
  return (
    <>
      <h3>Generic Props concept</h3>
      <List
        items={[1, 2, 3, 4, 5]}
        onClick={(value) => {
          alert(`You selected ${value} item`);
        }}
      />
      <List
        items={["jin", "eddy", "yosi", "paul"]}
        onClick={(value) => {
          alert(`You selected ${value} item`);
        }}
      />
      <List
        items={[{ name: "gowtham", age: 24, location: "india" }]}
        onClick={(value) => {
          alert(`You selected ${value} item`);
        }}
      />
    </>
  );
};

export default Generic;
