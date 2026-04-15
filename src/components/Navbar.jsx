import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { RiBarChartLine, RiHome2Line, RiTimerLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = "bg-[#244D3F] text-white btn btn-md border-none px-6 py-3 rounded-xl flex items-center gap-3 font-bold shadow-md transition-all w-full md:w-auto justify-start md:justify-center text-lg md:text-base";
  const normalStyle = "flex rounded-xl btn btn-md btn-ghost items-center gap-3 px-6 py-3 text-gray-500 hover:text-[#244D3F] transition-all w-full md:w-auto justify-start md:justify-center text-lg md:text-base";

  const navLinks = [
    { to: "/", label: "Home", icon: <RiHome2Line className="text-sm" /> },
    { to: "/timeline", label: "Timeline", icon: <RiTimerLine className="text-sm" /> },
    { to: "/stats", label: "Stats", icon: <RiBarChartLine className="text-sm" /> },
  ];

  return (
    <nav className="backdrop-blur-xl bg-transparent shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="shrink-0">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-1"><FaUserCheck size={30} className="text-3xl md:text-4xl" /> Keen<span className="text-green-800">Keeper</span></h3>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#244D3F] text-3xl focus:outline-none transition-transform active:scale-90"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/98 backdrop-blur-md shadow-md z-50 ${isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-3 p-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            >
              <span className="text-sm">{link.icon}</span>
              <span className="text-sm">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;