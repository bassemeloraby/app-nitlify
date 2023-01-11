import React from 'react';

const Main = () => {
  const companies = [
    {
      id: 1,
      name: 'I Care',
      logo: 'https://i-care.globemedsaudi.com:8036/images/icarelogo.png',
      URL: 'https://i-care.globemedsaudi.com:8036/',
      tel: '05600255527',
    },
    {
      id: 2,
      name: 'Bupa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bupa_Arabia_logo.jpg',
      URL: 'https://www.bupa.com.sa/',
      tel: '8002440307',
    },
    {
      id: 3,
      name: 'I Care',
      logo: 'https://i-care.globemedsaudi.com:8034/images/icarelogo.gif',
      URL: 'https://i-care.globemedsaudi.com:8034/',
      tel: '05600254427',
    },
  ];
  return (
    <section>
      {companies.map((company) => (
        <div className="container m-2">
          <a href={company.URL} rel="noreferrer" target="_bSlank">
            <img
              src={company.logo}
              alt="I Care"
              className="img-thumbnail"
              width={'150px'}
              height={'150px'}
            ></img>
          </a>
          <span>tel:{company.tel}</span>
          <span></span>
        </div>
      ))}
    </section>
  );
};

export default Main;
