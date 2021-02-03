
import './App.css';
import Aside from './components/Aside';
import Main from './components/Main';
// import Navbar from './components/Navbar';
// import Projects from './pages/Projects';



function App() {
  return (
    <>

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
