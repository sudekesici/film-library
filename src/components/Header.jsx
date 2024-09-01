import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
      <input type="text" placeholder="Search" style={{ width: '200px', padding: '5px' }} />
    </header>
  );
};

export default Header;
