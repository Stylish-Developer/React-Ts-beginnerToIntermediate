// -- types
export interface ProfileProps {
  name: string;
}
// -- Profile component
const Profile = (props: ProfileProps) => {
  const { name } = props;
  return (
    <>
      <h4>Profile component</h4>
      <h1>WELCOME MR.{name}</h1>
    </>
  );
};

export default Profile;
