import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';

function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      <div className='container my-3'>
        <Textform headings="Enter the text below: " />
        {/* <About/> */}
      </div>
    </>

  );
}

export default App;