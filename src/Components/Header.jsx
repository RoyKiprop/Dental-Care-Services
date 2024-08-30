import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import ToothLogo from "../assets/Images/ToothLogo.png";

function Header() {
  return (
    <header className="bg-white w-full">

      <div className="text-[#c69968] py-2 flex  justify-between items-center px-6 sm:px-10 md:px-32 border-b w-full">
        <p className='hidden lg:block'></p>
        <p className="text-xs sm:text-sm md:text-base font-medium">
          Ihre kieferorthopädische Praxis an Rhein und Ahr
        </p>
        <div className="flex space-x-4 text-[#c69968]">
          <Link to="/instagram" alt="Instagram" className="hover:text-gray-800">
            <FaInstagram className="text-lg sm:text-xl" />
          </Link>
          <Link to="/facebook" alt="Facebook" className="hover:text-gray-800">
            <FaFacebookF className="text-lg sm:text-xl" />
          </Link>
        </div>
      </div>

   
      <div className="flex flex-row justify-center items-center py-4 sm:py-6 md:py-7 w-full text-center">
        <img src={ToothLogo} alt="Logo" className="h-12 sm:h-14 md:h-16" />
        <div className="ml-2">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-medium text-[#9ba99c]">
            <b>Kieferorthopädie</b> Remagen Sinzig
          </h1>
          <p className="text-xs sm:text-lg md:text-xl text-[#c69968] font-medium">
            Dr. Franziska Kroll • Dr. Miriam Vieweg
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
