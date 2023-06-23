// -- Props types
interface Props {
    name: string;
}
const StringProps = (props: Props) => {
    const { name } = props;
    return (
        <>
            <p>String Props = Say MyName {name}</p>
            
        </>
    )
}

export default StringProps;