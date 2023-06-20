import './App.css';
import BasicProps from './components/basic-props';
import TypingProps from './components/typing-props';

// -- ROOT COMPONENT
const App = () => {
  return (
    <>
      <div className='container'>
        <h1 className='title'>Welcome to react typescript</h1>
        <TypingProps />
        <BasicProps />
      </div>
    </>
  )
}

export default App;