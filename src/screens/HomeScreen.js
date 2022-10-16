import React, { useEffect } from 'react';

export default function HomeScreen() {
  useEffect(() => {
    const motion = async () => {
      let text = document.getElementById('text');
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        text.style.marginRight = value * 1.5 + 'px';
      });
    };
    motion();
  }, []);

  return (
    <div className="bg-gradient-to-r from-transparent via-black to-transparent mt-40">
      <h1 className="font-bold text-xl text-center text-white p-4" id="text">
        Think of it as Tinder for Anime fans
      </h1>
    </div>
  );
}
