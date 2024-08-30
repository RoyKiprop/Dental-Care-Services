import Button from "./Button";
import ToothLogo from "../assets/Images/ToothLogo.png";
import sticker1 from "../assets/Images/sticker1.png";
import sticker2 from "../assets/Images/sticker2.png";
import { FaPhoneAlt, FaFax, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="bg-[#eeeeee] pt-16 pb-32">
      <div className="mx-5 md:mx-16 flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-3/4">
          <h2 className="text-[#9dab9d] text-lg sm:text-xl font-medium uppercase mb-4">
            Ihr Kontakt zu uns
          </h2>
          <p className="text-[#9dab9d] text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 md:w-[85%]">
            Wir freuen uns auf Ihre Terminvereinbarungen und Ihren Besuch in
            unserer Praxis für Kieferorthopädie:
          </p>

          <div className="flex items-center mb-8">
            <div className="p-4 rounded-full bg-[#d3e2cf] mr-2">
              <FaPhoneAlt className="text-gray-500" />
            </div>
            <div className="ml-4 mt-5">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#c19e78] mb-1">
                02642 9931-270
              </h4>
              <p className="text-gray-800">
                Während unserer Sprech- und Öffnungszeiten
              </p>
            </div>
          </div>
          <div className="ml-4 md:ml-16 mb-8">
            <Button variant="primary">Jetzt Termin online vereinbaren!</Button>
          </div>

          <div className="flex items-center">
            <div className="p-4 rounded-full bg-[#d3e2cf] mr-2">
              <FaFax className="text-gray-500" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#9dab9d] font-medium mb-1">
                02642 9931-274
              </h4>
              <p className="text-gray-800">Für Telefax-Dokumente</p>
            </div>
          </div>
          <div className="flex items-start my-8">
            <div className="p-4 rounded-full bg-[#d3e2cf] mr-2">
              <FaEnvelope className="text-gray-500" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#c19e78] mb-1">
                praxis@kfo-remagen-sinzig.de
              </h4>
              <p className="text-gray-800">
                Für die schriftliche Korrespondenz mit uns per E-Mail.
              </p>
            </div>
          </div>
          <h3 className="text-[#9dab9d] text-lg sm:text-xl font-medium uppercase mb-4">
            So finden Sie uns
          </h3>
          <p className="text-gray-800 md:w-[85%] mb-6">
            Sie finden unsere Praxis in fußläufiger Entfernung zum Remagener
            Bahnhof in der Karmeliterstraße. Entsprechend sind wir sowohl mit
            öffentlichen Verkehrsmitteln als auch mit dem Auto gut erreichbar.
            Parken Sie bequem und kostenlos direkt vor der Praxis.
          </p>
          <div className="flex items-center">
            <div className="p-4 rounded-full bg-[#d3e2cf] mr-2">
              <FaMapMarkerAlt className="text-gray-500" />
            </div>
            <div className="ml-2">
              <h3 className="text-[#9dab9d] text-lg sm:text-xl font-medium uppercase mb-1">
                Orthodontics Remagen Sinzig
              </h3>
              <p className="text-[#c19e78] text-base sm:text-lg font-medium">
                Dr. Franziska Kroll & Dr. Miriam Vieweg
              </p>
              <p className="text-gray-900">Karmeliterstraße 11</p>
              <p className="text-gray-900">53424 Remagen</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start md:space-y-6 w-full md:w-1/4">
          <div className="mb-4 md:mb-0">
            <img src={ToothLogo} className="block w-full max-w-48" />
          </div>
          <h3 className="text-[#9dab9d] text-lg sm:text-xl uppercase mb-4">
            Öffnungszeiten
          </h3>
          <div className="mb-6 ">
            <p className="text-[#c19e78] text-lg sm:text-xl mb-4">
              Montag bis Donnerstag
            </p>
            <p className="text-[#9dab9d] text-base sm:text-lg font-medium">
              08:15 – 12:15 Uhr
            </p>
            <p className="text-[#9dab9d] text-base sm:text-lg font-medium">
              13:15 – 17:45 Uhr
            </p>
            <p className="text-[#c19e78] text-lg sm:text-xl mt-3">Freitag</p>
            <p className="text-[#9dab9d] font-medium text-base sm:text-lg">
              nach Vereinbarung
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <img src={sticker1} className="block w-full max-w-72" />
          </div>
          <div className="mb-4 md:mb-0">
            <img src={sticker2} className="block w-full max-w-56" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;


