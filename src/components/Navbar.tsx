import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { useState } from 'react';
const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* <NavLink to="" className={'flex items-center gap-2'}> */}
        <a href="#home" className={'flex items-center gap-2'}>
          <img src={logo} alt="logo" className="w-16" />
          <p className="text-white text-[15px] font-bold cursor-pointer">
            Gerges Farag
            <span className="sm:block hidden">| Fullstack Developer</span>
          </p>
        </a>
        {/* </NavLink> */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white transition duration-400 text-[15px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
            onClick={() => {
              setToggle((t) => !t);
            }}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-gradient-to-r from-violet-900 to-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } hover:text-white transition duration-400 text-[15px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle((t) => !t);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
