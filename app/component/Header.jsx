import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import ThemeChenger from "./ThemeChenger";

function Header() {
  return (
    <header className="px-3 py-2">
      <nav className="flex justify-between items-center w-[85%] m-auto">
        <ul className="flex items-center gap-4 capitalize">
          <MenuItem title="home" Icon={FaHome} address="/" />
          <MenuItem title="about" Icon={FaInfoCircle} address="/about" />
        </ul>
        <div className="flex gap-3 items-center">
          <ThemeChenger />
          <div className="flex gap-1  items-center">
            <span className="bg-amber-500 px-2 py-1 uppercase font-bold rounded-md">
              imdb
            </span>
            <span className="hidden md:block">clone</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
