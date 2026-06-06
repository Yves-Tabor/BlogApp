import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "bg-[#8AB49E] text-lg border-b-[3px] border-white focus:border-white shadow-lg focus:text-white focus:outline-none py-1 px-4 rounded-lg hover:text-white"
    : "text-lg border-b-[3px] border-transparent hover:border-white focus:border-white focus:text-white focus:outline-none py-1 px-4 rounded-lg hover:text-white";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/posts", label: "Posts" },
];

export default function NavBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}): React.JSX.Element {
  const ref = React.useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function focusOnElement() {
    ref.current?.focus();
  }

  function closeMenu() {
    setMenuOpen(false);
    focusOnElement();
  }

  return (
    <nav className="sticky z-60 top-0 flex flex-col w-full p-[1%] bg-white shadow-sm">
      {/* Top row */}
      <div className="flex flex-row items-center justify-between w-full">
        {/* Logo */}
        <div id="logo" className="flex-shrink-0">
          <h1 className="flex items-center justify-center">
            <span className="mini text-[1.6rem] text-white">Mini</span>
            <span className="font-sans text-black">Blog</span>
            <span className="text-black">.</span>
          </h1>
        </div>

        {/* Search + hamburger on mobile / links on desktop */}
        <div className="flex flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg focus:outline-black px-4 py-2 text-sm w-40 sm:w-56"
          />

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden bg-black text-white px-3 py-1 rounded-lg"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="text-2xl leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex md:w-[50%] justify-evenly items-center">
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass} onClick={focusOnElement}>
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        style={{
          maxHeight: menuOpen ? 200 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
          opacity: menuOpen ? 1 : 0,
        }}
        className="md:hidden flex flex-col items-start gap-1 pt-2 pb-1 px-2"
      >
        {LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={linkClass}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}