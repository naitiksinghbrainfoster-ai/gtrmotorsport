import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/logo1.svg";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "SPECIALS", path: "/specials" },
  // { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className=" top-0 left-0 w-full z-50 bg-black/95 backdrop-blur border-b border-zinc-800">
      <div className="max-w-[1400px] mx-auto h-24 px-6 xl:px-10 flex items-center justify-between">

        {/* Logo */}

        <NavLink to="/">
          <img
            src={logo}
            alt="GTR Motorsport"
            className="w-[145px] object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm tracking-[2px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-[#C00000]"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* Desktop Button */}

        <NavLink
          to="/contact"
          className="hidden lg:flex h-12 px-8 items-center bg-[#C00000] hover:bg-red-700 transition duration-300 text-white text-sm font-bold tracking-wide uppercase"
        >
          schedule appointment 
        </NavLink>

        {/* Mobile Icon */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-white"
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="lg:hidden bg-black border-t border-zinc-800">

          <div className="flex flex-col py-5">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `px-6 py-4 text-sm tracking-widest transition ${
                    isActive
                      ? "text-[#C00000]"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="px-6 pt-5">

              <NavLink
                to="/contact"
                className="h-12 flex justify-center items-center bg-[#C00000] text-white uppercase tracking-wider font-semibold"
              >
                schedule appointment 
              </NavLink>

            </div>

          </div>

        </div>
      )}
    </header>
  );
}