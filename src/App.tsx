import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { NotFoundView } from '@/components/ui/NotFoundView';
import { HomePage } from '@/pages/HomePage';
import { ShopPage } from '@/pages/ShopPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { GirlsPage } from '@/pages/GirlsPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop/:slug" element={<ProductDetailPage />} />
        <Route path="about-her-day" element={<AboutPage />} />
        <Route path="herday-girls" element={<GirlsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="*"
          element={
            <NotFoundView
              title="This page could not be found"
              message="The page you were looking for may have moved. Return to the homepage to continue exploring HerDay."
              backTo="/"
              backLabel="Back to Home"
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
