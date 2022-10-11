import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';

function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      <div className='container'>
        <Textform headings="Enter the text below: " />
      </div>
    </>

  );
}

export default App;