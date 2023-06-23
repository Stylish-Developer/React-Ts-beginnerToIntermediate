// type Props = {
//   value: number;
//   isLoggedIn?: boolean;
//   isLoggedOut?: boolean;
//   isZero?: boolean;
// };

// steps
//  we need to define a type separately
type ResProps = {
  value: number;
};

type In = ResProps & {
  isLoggedIn: boolean;
  isLoggedOut?: never;
  isZero?: never;
};

type Out = ResProps & {
  isLoggedOut: boolean;
  isLoggedIn?: never;
  isZero?: never;
};

type Zero = ResProps & {
  isZero: boolean;
  isLoggedIn?: never;
  isLoggedOut?: never;
};

type Props = In | Out | Zero;
// -- Restrict prop
const RestrictingProps = (props: Props) => {
  const { value, isLoggedIn, isLoggedOut, isZero } = props;
  return (
    <>
      Value - {value}
      <br /> {isLoggedIn && "You Are Logged In"}
      {isLoggedOut && "You Are Logged Out"} {isZero && "You Value Zero"}
    </>
  );
};

export default RestrictingProps;
