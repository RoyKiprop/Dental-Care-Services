import ToothLogo from "../assets/Images/ToothLogo.png";

function HomeSectionFive() {
  return (
    <section className="mt-16">
      <div className="mx-16">
        <div className="flex">
          <div className="max-w-7xl mx-auto">
            <div className=" text-[#9ba99c] space-y-5">
              <h5 className="text-[18px]">PRAXIS-INFORMATION</h5>
              <h2 className="text-[26px] w-[80%]">
                Digitale Kieferorthopädie: Ihr Vorteil
              </h2>
            </div>
         
            <img
                src={ToothLogo}
                className="block max-w-96 mt-10"
                alt="Tooth Logo"
              />
          
          </div>
          <div className="w-1/2">
            <p className="text-[#626262] text-lg mb-16">
              Moderne digitale Medizintechnik gehört zu den Highlights unserer
              Praxis, denn sie tragen zu einem hohen Patientenkomfort bei. So
              besteht z.B. die Möglichkeit den klassischen Kieferabdruck durch
              einen Scan der Zähne zu ersetzen. Zudem röntgen wir durch neueste
              digitale Verfahren so strahlenarm wie möglich. Gewonnene Daten
              können digital schneller bearbeitet werden („Digitaler Workflow“)
              und die Praxis arbeitet meist deutlich umweltfreundlicher, da
              weniger Materialien verbraucht werden.
            </p>
            <div className="flex space-x-16">
              <div className="space-y-8 w-1/2">
                <h3 className="text-[#C79C69] text-2xl">
                  Ein strahlendes Lächeln mit geraden, schönen Zähnen ...
                </h3>
                <p className="w-[85%]">
                  ... signalisiert Gesundheit und beeinflusst das eigene
                  Wohlbefinden, das Selbstbewusstsein und damit auch die
                  persönliche Ausstrahlung
                </p>
              </div>
              <div className="space-y-8 w-1/2">
                <h3 className="text-[#C79C69] text-2xl">
                  Wir legen großen Wert ..
                </h3>
                <p className="w-[90%]">
                  ... auf eine enge Zusammenarbeit mit dem überweisenden
                  Zahnarzt und anderen Fachkollegen. Auf diese Weise können wir
                  individuell auf Sie zugeschnittene Behandlungskonzepte
                  erarbeiten und umsetzen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full py-4 bg-[#9ba99c] text-white rounded-lg my-20">
        Erfahren Sie mehr über unser Leistungsspektrum
      </button>
      </div>
     
    </section>
  );
}

export default HomeSectionFive;
