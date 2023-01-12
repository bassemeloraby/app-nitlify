import React from 'react';
import companies from '../data';
const Main = () => {
  
  return (
    <section className="row justify-content-center bg-secondary">
      {companies.map((company) => (
        <div className="container m-2 col-3">
        <label>{company.name}</label>
          <a href={company.URL} rel="noreferrer" target="_bSlank">
            <img
              src={company.logo}
              alt="I Care"
              className="img-thumbnail"
              width={'200px'}
              height={'100px'}
            ></img>
          </a>
          
        </div>
      ))}
    </section>
  );
};

export default Main;
