import './App.css';
import TypingProps from './components/typing-props';

// -- ROOT COMPONENT
const App = () => {
  return (
    <>
      <div className='container'>
        <h1 className='title'>Welcome to react typescript</h1>
        <TypingProps />
      </div>
    </>
  )
}

export default App;