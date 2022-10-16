import React from 'react';
import { NavLink } from 'react-router-dom';
import swords from '../assets/images/sword.jpg';

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 shadow-xl bg-gradient-to-r from-black to-transparent">
      <ul className="pt-32 mx-12">
        <li>
          <NavLink to="/action" className="text-white flex items-center p-4">
            <img
              alt="swords"
              src={swords}
              className="max-h-12 rounded-circle"
            />
            <p className="px-4 comet">Action</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/action" className="text-white flex items-center p-4">
            <img
              alt="swords"
              src={swords}
              className="max-h-12 rounded-circle"
            />
            <p className="px-4 comet">Adventure</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/action" className="text-white flex items-center p-4">
            <img
              alt="swords"
              src={swords}
              className="max-h-12 rounded-circle"
            />
            <p className="px-4 comet">Comedy</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/action" className="text-white flex items-center p-4">
            <img
              alt="swords"
              src={swords}
              className="max-h-12 rounded-circle"
            />
            <p className="px-4 comet">Fantasy</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/action" className="text-white flex items-center p-4">
            <img
              alt="swords"
              src={swords}
              className="max-h-12 rounded-circle"
            />
            <p className="px-4 comet">Mystery</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/action" className="text-white flex items-center p-4">
            <img
              alt="swords"
              src={swords}
              className="max-h-12 rounded-circle"
            />
            <p className="px-4 comet">Psychological</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/action" className="text-white flex items-center p-4">
            <img
              alt="swords"
              src={swords}
              className="max-h-12 rounded-circle"
            />
            <p className="px-4 comet">Romance</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/action" className="text-white flex items-center p-4">
            <img
              alt="swords"
              src={swords}
              className="max-h-12 rounded-circle"
            />
            <p className="px-4 comet">Sci-Fi</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
