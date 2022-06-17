import { Links } from "./Links";
import { navLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <Links
        navItems={ navLinks }
        classStyles="px-4 transition duration-300 hover:text-black font-medium"
      />
    </nav>
  )
}

export default Navbar