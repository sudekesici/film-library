import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './SideBar';

function HomeLayout({ searchTermSidebar, setSearchTermSidebar, searchTermHeader, setSearchTermHeader }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '94px' }}>
      <Header searchTerm={searchTermHeader} setSearchTerm={setSearchTermHeader} />
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <Sidebar searchTerm={searchTermSidebar} setSearchTerm={setSearchTermSidebar} />
        <div style={{ marginLeft: '287px', flex: 1, overflowY: 'auto'}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}


export default HomeLayout;
