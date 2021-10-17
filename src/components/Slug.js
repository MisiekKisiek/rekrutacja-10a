import React from 'react';
// import { useLocation } from 'react-router-dom';

const Slug = () => {

  // const location = useLocation();
  
  const fakeSlug = "/produkty/akcesoria/myszki";

  const renderSlug = fakeSlug.slice(1).split("/").map( slug => <span>{slug.toUpperCase()}</span> );

  return ( <div className="slug">
    <div className="slug__wrap">
      {renderSlug}
    </div>
  </div> );
}
 
export default Slug;