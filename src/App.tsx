import "./App.css";
import AdvanceProps from "./components/advance-props";
import BasicProps from "./components/basic-props";
import ClassComponent from "./components/class-component";
import Auth from "./components/class-component/auth";
import EventProps from "./components/event-props";
import Generic from "./components/generic-props";
import HooksTypes from "./components/hooks-types";
import Polymorphic from "./components/polymorphic-concept";
import RestrictProps from "./components/restrict-props";
import StyleProps from "./components/style-props";
import TempExclude from "./components/temp-exclude";
import TypingProps from "./components/typing-props";
import WrappingHtml from "./components/wrapping-html";

// -- ROOT COMPONENT
const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Welcome to react typescript</h1>
        <TypingProps />
        <BasicProps />
        <AdvanceProps />
        <EventProps />
        <StyleProps />
        <HooksTypes />
        <ClassComponent />
        <Auth />
        <Generic />
        <RestrictProps />
        <TempExclude />
        <WrappingHtml />
        <Polymorphic />
      </div>
    </>
  );
};

export default App;
