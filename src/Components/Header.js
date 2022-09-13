import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ManuList } from './ManuList';
import '../App.css';
const Header = () => {
  const [pageScrolled, setPageScrolled] = useState(false);
  const setPageScrolledValue = () => {
    if (window.scrollY > 100) setPageScrolled(true);
    else setPageScrolled(false);
  };

  useEffect(() => {
    setPageScrolledValue();
    window.addEventListener('scroll', setPageScrolledValue);
    return () => window.removeEventListener('scroll', setPageScrolledValue);
  }, []);

  return (
    <nav
      style={{
        background: pageScrolled ? 'black ' : 'transparent',
        color: 'white',
      }}
      className={`flex items-center justify-between fixed flex-wrap pr-16 p-4 w-full shadow-md transition-all`}
    >
      <div className="flex items-center flex-shrink-0  mr-6  ">
        <span className="font-semibold text-xl tracking-tight ">
          Logo design
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex justify-around lg:items-center lg:w-auto mycolor">
        <div className="text-sm lg:flex justify-center">
          {ManuList.map((manu) => {
            return (
              <Link
                to={manu.url}
                className="block mt-4 lg:inline-block  lg:mt-0   hover:text-blue-500 mr-16"
              >
                {manu.title}
              </Link>
            );
          })}
        </div>
        <div>
          <Link
            to="/about"
            className="inline-block text-sm px-4 py-2 leading-none border rounded  border ease-linear hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
