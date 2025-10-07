import React from 'react';

const ContainerLayout = ({children }) => {
  return (
    <div className='container mx-auto'>
      {children}
    </div>
  );
};

export default ContainerLayout;