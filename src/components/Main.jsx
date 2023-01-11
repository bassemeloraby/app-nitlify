import React from 'react';
import companies from '../data';
const Main = () => {
  
  return (
    <section className="row">
      {companies.map((company) => (
        <div className="container m-2 col">
          <a href={company.URL} rel="noreferrer" target="_bSlank">
            <img
              src={company.logo}
              alt="I Care"
              className="img-thumbnail"
              width={'100px'}
              height={'100px'}
            ></img>
          </a>
          <ul className='list-group justify-content-between'>
            <li className='list-group-item'>tel:{company.tel}</li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Main;
