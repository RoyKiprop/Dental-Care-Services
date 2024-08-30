import removebraces from "../assets/Images/removebraces.png";
import fixedbraces from "../assets/Images/fixedbraces.png";
import adultBraces from "../assets/Images/adultBraces.png";
import kfoline from "../assets/Images/kfoline.png";
import image1 from "../assets/Images/image1.png";
import image2 from "../assets/Images/image2.png";
import image3 from "../assets/Images/image3.png";
import image4 from "../assets/Images/image4.png";
import Button from "./Button";

function HomeServices() {
  return (
    <section className="mx-16 mt-10 mb-32">
      <div className="space-y-5">
        <h2 className="text-lg text-[#a3ab9e] font-medium">
          PATIENTEN-INFORMATION
        </h2>
        <h1 className="text-2xl text-[#a3ab9e] font-semibold ">
          Unser Leistungsspektrum umfasst:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-8 bg-[#ebe8e3] rounded-lg flex flex-col h-full">
            <div>
              <img
                src={removebraces}
                alt="Tooth Logo"
                className="w-full h-auto mb-5"
              />
            </div>
            <div className="h-20 mb-4">
              <p className="text-[#a3ab9e] text-xl">
                Herausnehmbare Zahnspangen für Kinder
              </p>
            </div>
            <img src={kfoline} className="block w-full max-w-40 mb-5" />
            <p className="text-lg text-[#626262] flex-grow">
              sind die häufigsten Behandlungsgeräte bei Kindern. Mit ihnen kann
              das natürliche Kieferwachstum genutzt werden, um die
              Kieferstellung zu optimieren. Auch kleinere Zahnkorrekturen sind
              damit möglich.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>

          <div className="p-8 bg-[#e5ddd2] rounded-lg flex flex-col h-full">
            <div>
              <img
                src={fixedbraces}
                alt="Tooth Logo"
                className="w-full h-auto mb-5"
              />
            </div>
            <div className="h-20 mb-4">
              <p className="text-[#c8b07b] text-xl">
                Festsitzende Zahnspangen für Jugendliche und Erwachsene
              </p>
            </div>
            <img src={kfoline} className="block w-full max-w-40 mb-5" />
            <p className="text-lg text-[#626262] flex-grow">
              kommen zum Einsatz, wenn alle bleibenden Zähne durchgebrochen
              sind. Mit dieser altbewährten Methode lassen sich auch
              komplizierte Zahnfehlstellungen medizinisch und ästhetisch
              korrigieren, da die Spange 24 Stunden auf die Zähne einwirkt.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>

          <div className="p-8 bg-[#ebe8e3] rounded-lg flex flex-col h-full">
            <div>
              <img
                src={adultBraces}
                alt="Tooth Logo"
                className="w-full h-auto mb-5"
              />
            </div>
            <div className="h-25 mb-4">
              <p className="text-[#a3ab9e] text-xl">
                Diese KFO-Praxis ist qualifiziert für Alignerbehandlungen und
                Lingualbehandlungen.
              </p>
            </div>
            <img src={kfoline} className="block w-full max-w-40 mb-5" />
            <p className="text-lg text-[#626262] flex-grow">
              Die linguale Zahnspange befindet sich auf der Innenseite der Zähne
              und ist somit von außen nahezu unsichtbar. Diese innenliegende
              Zahnspange wirkt wie die „normale“ feste Zahnspange 24 Stunden am
              Tag auf die Zähne ein.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>
          <div className="p-8 bg-[#e8eae9] col-span-2 rounded-lg flex flex-col h-full">
            <div>
              <img
                src={image1}
                alt="Tooth Logo"
                className="w-full max-w-96 mb-5"
              />
            </div>
            <div className="h-25 mb-12">
              <p className="text-[#a3ab9e] text-xl">
                Zahnkorrekturen mit unsichtbaren Zahnspangen
              </p>
            </div>
            <img src={kfoline} className="block w-full max-w-40 mb-5" />
            <p className="text-lg text-[#626262] flex-grow">
              Als Alternative zur festen Zahnspange bietet Ihnen unsere
              kieferorthopädische Praxis in Remagen&nbsp;die{" "}
              <b>unauffällige und praktische Zahnkorrektur</b> mit
              durchsichtigen, herausnehmbaren Zahnschienen (sogenannten
              Alignern). Aligner sind dünne, hochtransparente
              Kunststoffschienen.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>
          <div className="p-8 bg-[#e5ddd2] rounded-lg flex flex-col h-full">
            <div>
              <img
                src={image2}
                alt="Tooth Logo"
                className="w-full h-auto mb-5"
              />
            </div>
            <div className="h-25 mb-4">
              <p className="text-[#c59e6a] text-xl">
                Sportmundschutz für Jugendliche und Erwachsene
              </p>
            </div>
            <img src={kfoline} className="block w-full max-w-40 mb-5" />
            <p className="text-lg text-[#626262] flex-grow">
              Bei Kontaktsportarten oder Sportarten mit hohem Sturz- und
              Verletzungsrisiko kann es schnell zu Unfällen kommen – und nicht
              selten sind auch die Zähne betroffen. Daher empfehlen wir einen
              individuellen Sportmundschutz.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>
          <div className="p-8 bg-[#e5ddd2] rounded-lg flex flex-col h-full">
            <div>
              <img
                src={image3}
                alt="Tooth Logo"
                className="w-full h-auto mb-5"
              />
            </div>
            <div className="h-25 mb-6">
              <p className="text-[#c59e6a] text-xl">
                Behandlung von Kieferfehlstellungen in Zusammenarbeit mit
                chirurgischen Praxen
              </p>
            </div>
            <img src={kfoline} className="block w-full max-w-40 mb-5" />
            <p className="text-lg text-[#626262] flex-grow">
              Liegen Kieferfehlstellungen in ausgeprägter Form vor und / oder
              ist das Körperwachstum abgeschlossen, reicht eine rein
              kieferorthopädische Behandlung oft nicht mehr aus, um eine
              gesunde, physiologische Verzahnung zu erreichen. Dann wird in
              enger Zusammenarbeit mit einem ...
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>
          <div className="p-8 bg-[#e5ddd2] col-span-2 rounded-lg flex flex-col h-full">
            <div>
              <img
                src={image4}
                alt="Tooth Logo"
                className="w-full max-w-96 mb-5"
              />
            </div>
            <div className="h-25 mb-20">
              <p className="text-[#a3ab9e] text-xl">
                Schnarchtherapie <b>für einen gesunden Schlaf</b>
              </p>
            </div>
            <img src={kfoline} className="block w-full max-w-40 mb-5" />
            <p className="text-lg text-[#626262] flex-grow">
              Bei nächtlichem Schnarchen oder Schlafapnoen kann die
              Unterkieferprotrusionsschiene häufig Erleichterung bringen. Wenn
              Sie zu einer der Risikogruppen für Schnarchen oder Apnoen gehören
              oder unter Symptomen wie ...
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
