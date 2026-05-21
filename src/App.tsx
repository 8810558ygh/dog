import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@components/layout/Layout';
import { HomePage } from '@pages/HomePage';
import { DogDetailPage } from '@pages/DogDetailPage';
import { FavoritesPage } from '@pages/FavoritesPage';
import { AboutPage } from '@pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dog/:dogId" element={<DogDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
