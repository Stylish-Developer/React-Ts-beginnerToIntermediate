import { ReactNode } from "react";

// -- Types
interface Props {
    children: ReactNode;
}
const AdvancePropsType = (props: Props) => {
    const { children } = props;
    return <>{children}</>;
};

export default AdvancePropsType;
