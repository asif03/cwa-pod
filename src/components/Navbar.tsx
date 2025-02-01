import { Link, NavLink } from "react-router";
import { navMenu } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ companyId }: { companyId: string }) => {
  // State to manage the navbar's visibility
  const [toggleMenu, setToggleMenu] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className="flex flex-row items-center justify-between">
      <h3 className="text-black">Copany Name Dashboard</h3>
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:gap-10">
        <ul className="flex flex-row items-center justify-between gap-10 rounded-lg border bg-white px-5 py-2 text-sm font-bold">
          {navMenu.map((menu: INavItem) => (
            <li key={menu.id}>
              <NavLink
                to={menu.url(companyId)}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
              >
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/"
          className="rounded-lg border bg-linear-to-b from-[#FFFFFF] to-[#DEE1E8] px-5 py-2 text-sm font-bold text-black"
        >
          Back
        </Link>
      </div>
      {/* Mobile Navigation Icon */}
      <button onClick={handleNav} className="block md:hidden">
        {toggleMenu ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          toggleMenu
            ? "bg-secondary fixed top-0 left-0 z-10 h-full w-[70%] shadow duration-500 ease-in-out md:hidden"
            : "fixed top-0 bottom-0 left-[-100%] z-10 w-[70%] duration-500 ease-in-out"
        }
      >
        {/* Mobile Logo */}
        <h3 className="px-5 py-4 text-black">Company Name</h3>
        {/* Mobile Navigation Items */}
        {navMenu.map((menu: INavItem) => (
          <li
            key={menu.id}
            className="cursor-pointer border bg-white px-5 py-2 text-sm font-bold hover:bg-[#00df9a] hover:text-black"
          >
            <NavLink
              to={menu.url(companyId)}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
