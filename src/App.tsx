import './App.css';
import AdvanceProps from './components/advance-props';
import BasicProps from './components/basic-props';
import EventProps from './components/event-props';
import HooksTypes from './components/hooks-types';
import StyleProps from './components/style-props';
import TypingProps from './components/typing-props';

// -- ROOT COMPONENT
const App = () => {
  return (
    <>
      <div className='container'>
        <h1 className='title'>Welcome to react typescript</h1>
        <TypingProps />
        <BasicProps />
        <AdvanceProps />
        <EventProps />
        <StyleProps />
        <HooksTypes />
      </div>
    </>
  )
}

export default App;