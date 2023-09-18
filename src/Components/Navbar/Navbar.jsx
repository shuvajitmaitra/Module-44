import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/", exact: true },
    { id: 2, name: "About", path: "/about", exact: true },
    { id: 3, name: "Services", path: "/services", exact: true },
    { id: 4, name: "Contact", path: "/contact", exact: true },
    { id: 5, name: "NotFound", path: "*" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div
        onClick={() => setOpen(!open)}
        className="text-2xl md:hidden bg-green-200"
      >
        {!open ? <HiOutlineMenuAlt2 /> : <GrClose />}
      </div>

      <ul
        className={` md:flex absolute md:static text-center pl-6 pb-6 rounded-t-none rounded-lg bg-green-200 duration-1000 ${
          open ? `left-0` : `-left-60`
        } `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
