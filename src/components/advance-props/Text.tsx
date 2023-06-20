// -- Types
interface Props {
    children: string;
}
const Text = (props: Props) => {
    const { children } = props;
    return <p>{children}</p>;
};

export default Text;
