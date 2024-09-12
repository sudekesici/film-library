import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CardsPage from '../pages/CardsPage';
import Moviedetails from '../pages/Moviedetails';
import HomeLayout from './HomeLayout';  // HomeLayout'ı ekliyoruz

function AppRoutes() {
  return (
    <Routes>
      {/* Ana rota, HomeLayout ve Outlet üzerinden alt rotalara yönlendirecek */}
      <Route path="/" element={<HomeLayout searchTermHeader="" setSearchTermHeader={() => {}} searchTermSidebar="" setSearchTermSidebar={() => {}} />}>
        {/* HomeLayout içinde CardsPage gösterilecek */}
        <Route index element={<CardsPage />} />
        
        {/* Movie details sayfası HomeLayout'un Outlet'i ile render edilecek */}
        <Route path="movie-details/:id" element={<Moviedetails />} />
      </Route>
      
      {/* Yanlış bir URL olursa ana sayfaya yönlendirme */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
