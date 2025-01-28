import { Link, NavLink } from "react-router";
import { navMenu } from "../constants";

const Navbar = ({ companyId }: { companyId: number }) => {
  return (
    <nav className="flex flex-row items-center justify-between">
      <h3 className="text-black">Copany Name Dashboard</h3>
      <div className="flex flex-row items-center justify-between gap-10">
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
    </nav>
  );
};

export default Navbar;
