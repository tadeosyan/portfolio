import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Themes, Loader } from 'components';
import 'App.css';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Portfolio = lazy(() => import('./pages/portfolio'));
const Contact = lazy(() => import('./pages/contact'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default App;
