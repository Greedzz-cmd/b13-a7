"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuClock3 } from "react-icons/lu";
import { PiChartLineBold } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";

const Header = () => {
  const pathName = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`btn ${pathName == "/" ? "bg-accent-content text-white" : "btn-ghost"}`}
        >
          <RiHome2Line className="h-5 w-5" />
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/timeline"
          className={`btn ${pathName == "/timeline" ? "bg-success-content text-white" : "btn-ghost"}`}
        >
          <LuClock3 className="h-5 w-5" />
          Timeline
        </Link>
      </li>
      <li>
        <Link
          href="/status"
          className={`btn ${pathName == "/status" ? "bg-success-content text-white" : "btn-ghost"}`}
        >
          <PiChartLineBold className="h-5 w-5" />
          Status
        </Link>
      </li>
    </>
  );

  return (
    <header className="bg-base-100 shadow-sm">
      <nav className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-x-1 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-2xl font-bold">
            <span>
              Keen
              <span className="text-success-content font-semibold">Keeper</span>
            </span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">{links}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
