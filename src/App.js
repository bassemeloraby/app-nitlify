
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
    <section className="row">
    <div className='col-3 '>
    <Sidebar/>
    </div>
    <div className='col'>
    <Main/>
    </div>
    </section>
    <Footer/>
    </div>
    </Fragment>
  );
}

export default App;
