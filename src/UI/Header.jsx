import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className="flex items-center justify-between mx-auto max-w-screen p-4 border-b px-20 py-6 border-gray-300">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-8" />
      </Link>
    </header>
  );
}

export default Header;
