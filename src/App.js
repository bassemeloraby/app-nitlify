
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <Fragment>
    <div className='container'>
    <Navbar/>
    <section >
    
    <div >
    <Main/>
    </div>
    </section>
    <Footer/>
    </div>
    </Fragment>
  );
}

export default App;
