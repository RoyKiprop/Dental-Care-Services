import ToothLogo from "../assets/Images/ToothLogo.png";
import kfoline from "../assets/Images/kfoline.png";
import karolina from "../assets/Images/karolina.jpg" 

function HomeTeam() {
  return (
    <section className="py-24 mt-12 bg-[#ededed]" >
      <div className="mx-5 flex flex-col md:flex-row ">
        <div className="w-1/2 bg-[#ededed] font-medium">
          <div className="flex justify-center mt-12 mb-8">
            <img src={ToothLogo} className="block w-full max-w-40" />
          </div>
          <div className="mx-12  space-y-8 text-[#9ba99c] text-xl ">
            <h5 className="">TEAM</h5>
            <h2 className="">Lernen Sie uns kennen!</h2>
            <img src={kfoline} className="block w-full max-w-40  " />
            <p>
              Unsere individuell auf Sie oder Ihr Kind abgestimmten und
              qualitativ hochwertigen Behandlungsmittel reichen von
              herausnehmbaren Zahnspangen über klassische feste Zahnspangen bis
              hin zu beinahe unsichtbaren Behandlungsmöglichkeiten (Aligner und
              innenliegende Zahnspangen).
            </p>
            <p>
              Zudem bieten wir Unterkieferprotrusionsschienen zur Reduktion des
              nächtlichen Schnarchens, professionellen Sportmundschutz für
              Kontaktsportarten sowie die Behandlung von
              Kiefergelenksbeschwerden. Sprechen Sie uns gerne an!
            </p>
            <button className="px-4 py-3 text-white bg-[#9ba99c] rounded-lg">
             Mehr über uns ...
            </button>

          </div>
        </div>
        <div className="w-1/2">
         <img src={karolina} className="block w-full max-h-screen" />
        </div>
      </div>
    </section>
  );
}

export default HomeTeam;
