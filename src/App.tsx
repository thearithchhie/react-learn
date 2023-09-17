import { useState, useContext, useEffect, SetStateAction } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('Thearith');

  const handleFirstName = (e: { target: { value: SetStateAction<string>; }; }) => {
    console.log(`Input firstName ${e.target.value}`);
    setFirstName(e.target.value);
  }

  useEffect(() => {
    // console.log('Hello');
  });

  return (
    <>
      <form className='main-from'>
      <h2>Welcome</h2>
        <label>First Name</label>
        <input value={firstName} onChange={handleFirstName} />
      </form>
    </>
  )
}

export default App
