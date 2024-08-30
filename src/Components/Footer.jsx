
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import Button from "./Button";
import ToothLogo from "../assets/Images/ToothLogo.png";
import FooterContact from "./FooterContacts";



function Footer() {
  return (
    <footer className="bg-[#a6b0a1] text-white font-medium py-20 px-8">
      <div className="mx-20">
        <div>
          <img src={ToothLogo} alt="Tooth Logo" className="h-28 mb-2" />
        </div>
        <div className="max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl">
              <b>Kieferorthopädie</b> Remagen Sinzig
            </h2>
            <p className="mt-4">Dr. Franziska Kroll · Dr. Miriam Vieweg</p>
            <ul className="mt-4 space-y-2">
              <FooterContact
                Icon={FaMapMarkerAlt}
                text="Karmeliterstraße 11 · 53424 Remagen"
              />
              <FooterContact Icon={FaPhoneAlt} text="Telefon: 02642 9931-270" />
              <FooterContact Icon={FaFax} text="Telefax: 02642 9931-274" />
              <FooterContact
                Icon={FaEnvelope}
                text="praxis@kfo-remagen-sinzig.de"
              />
            </ul>
            <p className="mt-4 text-xl">www.kfo-remagen-sinzig.de</p>
            <p className="mt-4">Folgen Sie uns auch unter:</p>
            <div className="flex space-x-4 mt-2">
              <Link
                to="/facebook"
                className="text-black bg-white p-2 rounded-full hover:bg-[#181413] hover:text-white transition-colors"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="/instagram"
                className="text-black bg-white p-2 rounded-full hover:bg-[#181413] hover:text-white transition-colors"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

         
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl">Rechtliches</h3>
              <ul className="mt-4 space-y-2">
                {["IMPRESSUM", "DATENSCHUTZ", "COOKIE-HINWEIS"].map(
                  (text, index) => (
                    <li key={index}>
                      <Link
                        to={`/${text.toLowerCase().replace(" ", "-")}`}
                        className="text-white hover:text-black hover:underline"
                      >
                        {text}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="mt-5">
              <Button variant="primary">Jetzt Termin online vereinbaren!</Button>
            </div>
          </div>

       
          <div>
            <h3 className="font-bold text-2xl">Ihr Feedback über uns!</h3>
            <p className="mt-4 text-white">
              Waren Sie mit unserer Behandlung zufrieden? Dann freuen wir uns
              über Ihre positive Rezension! Wir sagen schonmal ein herzliches
              Dankeschön!
            </p>
            <Link
              to="/google-rezension"
              className="mt-4 text-white hover:text-black hover:underline block"
            >
              Zur Google Rezension
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
