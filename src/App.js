
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

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
