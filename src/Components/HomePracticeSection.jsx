import ToothLogo from "../assets/Images/ToothLogo.png";

function HomeSectionFive() {
  return (
    <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
      <div className="px-5 sm:px-5 md:px-8 lg:px-12 xl:px-16 ">
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="lg:w-1/2 max-w-3xl mx-auto lg:mx-0">
            <div className="text-[#9ba99c] space-y-3 sm:space-y-4 md:space-y-5">
              <h5 className="text-sm sm:text-base md:text-lg lg:text-xl">PRAXIS-INFORMATION</h5>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:w-[90%] xl:w-[80%]">
                Digitale Kieferorthopädie: Ihr Vorteil
              </h2>
            </div>
            <img
              src={ToothLogo}
              className="block w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 mt-6 sm:mt-8 md:mt-10 mx-auto lg:mx-0"
              alt="Tooth Logo"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <p className="text-[#626262] w-[90%] text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              Moderne digitale Medizintechnik gehört zu den Highlights unserer
              Praxis, denn sie tragen zu einem hohen Patientenkomfort bei. So
              besteht z.B. die Möglichkeit den klassischen Kieferabdruck durch
              einen Scan der Zähne zu ersetzen. Zudem röntgen wir durch neueste
              digitale Verfahren so strahlenarm wie möglich. Gewonnene Daten
              können digital schneller bearbeitet werden („Digitaler Workflow&quot;)
              und die Praxis arbeitet meist deutlich umweltfreundlicher, da
              weniger Materialien verbraucht werden.
            </p>
            <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8">
              <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:w-1/2">
                <h3 className="text-[#C79C69] text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Ein strahlendes Lächeln mit geraden, schönen Zähnen ...
                </h3>
                <p className="text-sm sm:text-base md:text-lg w-full lg:w-[90%] xl:w-[85%]">
                  ... signalisiert Gesundheit und beeinflusst das eigene
                  Wohlbefinden, das Selbstbewusstsein und damit auch die
                  persönliche Ausstrahlung.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:w-1/2">
                <h3 className="text-[#C79C69] text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Wir legen großen Wert ...
                </h3>
                <p className="text-sm sm:text-base md:text-lg w-full lg:w-[95%] xl:w-[90%]">
                  ... auf eine enge Zusammenarbeit mit dem überweisenden
                  Zahnarzt und anderen Fachkollegen. Auf diese Weise können wir
                  individuell auf Sie zugeschnittene Behandlungskonzepte
                  erarbeiten und umsetzen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full py-3 sm:py-4 bg-[#9ba99c] text-white rounded-lg mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 text-sm sm:text-base md:text-lg lg:text-xl">
          Erfahren Sie mehr über unser Leistungsspektrum
        </button>
      </div>
    </section>
  );
}

export default HomeSectionFive;

