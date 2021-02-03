
import './App.css';
import Aside from './components/Aside';
import Main from './components/Main';
// import Navbar from './components/Navbar';
// import Projects from './pages/Projects';
import backgroundImg from './assets/background-img.png';


function App() {
  return (
    <>
      {/* <div className='container'>
        <img src={backgroundImg} alt='bg' />
      </div> */}
      <div className='container'>
        {/* <Navbar /> */}
        <div className='row'>
            <Aside />
            <Main />
        </div>
        {/* <Projects /> */}
      </div>
    </>
  );
}

export default App;
