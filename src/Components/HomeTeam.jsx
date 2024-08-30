import ToothLogo from "../assets/Images/ToothLogo.png";
import kfoline from "../assets/Images/kfoline.png";
import karolina from "../assets/Images/karolina.jpg";

function HomeTeam() {
  return (
    <section className="py-12 md:py-24 mt-12 bg-[#ededed]">
      <div className="mx-5 flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 bg-[#ededed] font-medium">
          <div className="flex justify-center mt-12 mb-8">
            <img
              src={ToothLogo}
              className="block w-full max-w-20 sm:max-w-24 md:max-w-32 lg:max-w-40"
            />
          </div>
          <div className="mx-4 sm:mx-12 space-y-6 sm:space-y-8 text-[#9ba99c] text-lg md:text-xl">
            <h5 className="text-base md:text-lg">TEAM</h5>
            <h2 className="text-2xl md:text-3xl">Lernen Sie uns kennen!</h2>
            <img src={kfoline} className="block w-full max-w-20 sm:max-w-24 md:max-w-32 lg:max-w-40" />
            <p className="text-sm sm:text-base md:text-lg">
              Unsere individuell auf Sie oder Ihr Kind abgestimmten und
              qualitativ hochwertigen Behandlungsmittel reichen von
              herausnehmbaren Zahnspangen über klassische feste Zahnspangen bis
              hin zu beinahe unsichtbaren Behandlungsmöglichkeiten (Aligner und
              innenliegende Zahnspangen).
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Zudem bieten wir Unterkieferprotrusionsschienen zur Reduktion des
              nächtlichen Schnarchens, professionellen Sportmundschutz für
              Kontaktsportarten sowie die Behandlung von
              Kiefergelenksbeschwerden. Sprechen Sie uns gerne an!
            </p>
            <button className="px-4 py-3 text-white bg-[#9ba99c] rounded-lg text-sm md:text-base">
              Mehr über uns ...
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={karolina}
            className="block w-full h-auto max-h-[50vh] md:max-h-[75vh] lg:max-h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeTeam;

