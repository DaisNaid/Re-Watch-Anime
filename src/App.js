import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import stars from './assets/images/stars.png';
import moon from './assets/images/moon.png';
import SideBar from './components/SideBar';
import ActionScreen from './screens/ActionScreen';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const motion = async () => {
      let stars = document.getElementById('stars');
      let moon = document.getElementById('moon');
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value * 1.05 + 'px';
      });
    };
    motion();
  }, []);

  return (
    <div className="bg-gradient-to-b from-darkanime to-lightanime">
      <HashRouter>
        <header className="p-4 overflow-hidden h-[70vh]">
          <h1 className="text-center font-bold text-3xl text-zinc shadow-md">
            <NavLink to="/">Re-Watch</NavLink>
          </h1>
          <p className="text-center text-zinc pt-6 animate-glow">
            Never miss a likely favorite!
          </p>
          <section className="section relative max-w-full max-h-full p-20">
            <img
              id="stars"
              alt="stars"
              src={stars}
              className="absolute top-0 left-0 object-cover"
            />
            <img
              id="moon"
              alt="moon"
              src={moon}
              className="absolute top-0 left-0 object-cover mix-blend-screen"
            />
          </section>
        </header>
        <main className="min-h-screen">
          <SideBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/action" element={<ActionScreen />} />
          </Routes>
        </main>
        <footer className="font-bold text-white text-center p-4">
          &copy; 2022 Re-Watch
        </footer>
      </HashRouter>
    </div>
  );
}

export default App;
