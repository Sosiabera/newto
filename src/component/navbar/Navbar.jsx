import { BrowserRouter } from "react-router-dom";
import "./Navbar.css";

import { Link } from "react-scroll";

const Navbar = () => {
  const menus = [
    { title: "Home", url: "home" },
    { title: "Reason", url: "most" },
    { title: "View Point", url: "viewpoint" },
    { title: "Book Now", url: "" },
  ];

  return (
    <BrowserRouter>
      <nav className="flex justify-between items-center px-[10px] py-5">


        <div className="bg-[#4A8087] bg-opacity-[70%] py-3 px-[80px] rounded-[40px]">
          <ul className="flex text-white text-[17px] font-bold uppercase gap-[120px]">
            {menus.map((menu, i) => (
              <li key={i}>
                <Link
                  to={menu.url}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={500}
                  className="hover:border-b-2 border-white transform duration-150 cursor-pointer"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
