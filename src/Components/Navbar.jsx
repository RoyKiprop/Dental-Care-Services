import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#9ba99c] text-white text-sm rounded-md font-medium p-5 mx-5 my-5">
      <ul className="flex justify-center space-x-10">
        <li>
          <NavLink to="home">HOME</NavLink>
        </li>
        <li>
          <NavLink to="services">LEISTUNGEN</NavLink>
        </li>
        <li>
          <NavLink to="team">TEAM</NavLink>
        </li>
        <li>
          <NavLink to="career">KARRIERE</NavLink>
        </li>
        <li>
          <NavLink to="sos">SOS</NavLink>
        </li>
        <li>
          <NavLink to="impresions">IMPRESSIONEN</NavLink>
        </li>
        <li>
          <NavLink to="contact">KONTAKT</NavLink>
        </li>
        <li>
          <NavLink to="appointments">TERMIN ONLINE BUCHEN</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
