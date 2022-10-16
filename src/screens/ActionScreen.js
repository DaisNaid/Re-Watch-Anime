import React from 'react';
import aot from '../assets/images/aot.webp';
import ds from '../assets/images/DemonSlayer.jpg';
import bleach from '../assets/images/bleach.jpg';
import { NavLink } from 'react-router-dom';

export default function ActionScreen() {
  return (
    <div className="mt-52 ml-64">
      <h1 className="font-bold text-3xl text-white border-solid border-zinc border-b-2">
        Top-Rated
      </h1>
      <article className="flex bg-black">
        <div className="max-w-[34%]">
          <div className="flex">
            <img alt="AOT" src={aot} className="image hover:animate-flash" />
            <div className="flex flex-col">
              <span className="eng pt-12 px-8">Ratings</span>
              <span className="h2 pt-12 px-8">MAL: 9/10</span>
              <div className="px-4 py-12 flex flex-col gap-12">
                <button className="genrebtn">Dark Fantasy</button>
                <button className="genrebtn">Post Apocalyptic</button>
              </div>
            </div>
          </div>
          <NavLink to="/bleach">
            <h2 className="h2 px-2 italic hover:bg-gradient-to-r from-transparent via-white to-transparent">
              Shingeki no Kyojin
            </h2>
          </NavLink>
          <span className="eng px-2">Attack on Titan</span>
        </div>
        <div className="max-w-[34%]">
          <div className="flex">
            <img alt="AOT" src={ds} className="image hover:animate-flash" />
            <div className="flex flex-col">
              <span className="eng pt-12 px-8">Ratings</span>
              <span className="h2 pt-12 px-8">MAL: 9/10</span>
              <div className="px-4 py-12 flex flex-col gap-2">
                <button className="genrebtn">Adventure</button>
                <button className="genrebtn">Dark Fantasy</button>
                <button className="genrebtn">Martial Arts</button>
              </div>
            </div>
          </div>
          <NavLink to="/bleach">
            <h2 className="h2 px-2 italic hover:bg-gradient-to-r from-transparent via-white to-transparent">
              Kimetsu no Yaiba
            </h2>
          </NavLink>
          <span className="eng px-2">Demon Slayer</span>
        </div>
        <div className="max-w-[34%]">
          <div className="flex">
            <img alt="AOT" src={bleach} className="image hover:animate-flash" />
            <div className="flex flex-col">
              <span className="eng pt-12 px-8">Ratings</span>
              <span className="h2 pt-12 px-8">MAL: 8.5/10</span>
              <div className="px-4 py-12 flex flex-col gap-12">
                <button className="genrebtn">Adventure</button>
                <button className="genrebtn">Supernatural</button>
              </div>
            </div>
          </div>
          <NavLink to="/bleach">
            <h2 className="h2 px-2 italic hover:bg-gradient-to-r from-transparent via-white to-transparent">
              BLEACH
            </h2>
          </NavLink>
          <span className="eng px-2">Bleach</span>
        </div>
      </article>
    </div>
  );
}
