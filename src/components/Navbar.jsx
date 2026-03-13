import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center py-4 bg-neutral-950 border-b border-neutral-800">
      <div className="flex items-center gap-10">

        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              `text-sm tracking-wide transition-colors duration-200 ${isActive
                ? "text-white font-medium"
                : "text-neutral-400 hover:text-neutral-200"
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}

      </div>
    </div>
  );
};

export default Navbar;