
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
    <section className="mx-4 sm:mx-8 md:mx-16 my-16">
      <div className="space-y-8">
        <h2 className="text-lg text-[#a3ab9e] font-medium">
          PATIENTEN-INFORMATION
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#a3ab9e] font-semibold">
          Unser Leistungsspektrum umfasst:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-[#ebe8e3] rounded-lg flex flex-col h-full">
            <img
              src={removebraces}
              alt="Herausnehmbare Zahnspangen für Kinder"
              className="w-full h-48 object-cover mb-5"
            />
            <div className="h-20 mb-4">
              <p className="text-[#a3ab9e] text-xl font-semibold">
                Herausnehmbare Zahnspangen für Kinder
              </p>
            </div>
            <img src={kfoline} className="block w-20 mb-5" alt="Decorative line" />
            <p className="text-lg text-[#626262] flex-grow mb-6">
              sind die häufigsten Behandlungsgeräte bei Kindern. Mit ihnen kann
              das natürliche Kieferwachstum genutzt werden, um die
              Kieferstellung zu optimieren. Auch kleinere Zahnkorrekturen sind
              damit möglich.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>

          <div className="p-6 bg-[#e5ddd2] rounded-lg flex flex-col h-full">
            <img
              src={fixedbraces}
              alt="Festsitzende Zahnspangen für Jugendliche und Erwachsene"
              className="w-full h-48 object-cover mb-5"
            />
            <div className="h-20 mb-4">
              <p className="text-[#c8b07b] text-xl font-semibold">
                Festsitzende Zahnspangen für Jugendliche und Erwachsene
              </p>
            </div>
            <img src={kfoline} className="block w-20 mb-5" alt="Decorative line" />
            <p className="text-lg text-[#626262] flex-grow mb-6">
              kommen zum Einsatz, wenn alle bleibenden Zähne durchgebrochen
              sind. Mit dieser altbewährten Methode lassen sich auch
              komplizierte Zahnfehlstellungen medizinisch und ästhetisch
              korrigieren, da die Spange 24 Stunden auf die Zähne einwirkt.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>

          <div className="p-6 bg-[#ebe8e3] rounded-lg flex flex-col h-full">
            <img
              src={adultBraces}
              alt="KFO-Praxis für Alignerbehandlungen und Lingualbehandlungen"
              className="w-full h-48 object-cover mb-5"
            />
            <div className="h-20 mb-4">
              <p className="text-[#a3ab9e] text-xl font-semibold">
                Diese KFO-Praxis ist qualifiziert für Alignerbehandlungen und
                Lingualbehandlungen.
              </p>
            </div>
            <img src={kfoline} className="block w-20 mb-5" alt="Decorative line" />
            <p className="text-lg text-[#626262] flex-grow mb-6">
              Die linguale Zahnspange befindet sich auf der Innenseite der Zähne
              und ist somit von außen nahezu unsichtbar. Diese innenliegende
              Zahnspange wirkt wie die „normale&quot; feste Zahnspange 24 Stunden am
              Tag auf die Zähne ein.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>

          <div className="p-6 bg-[#e8eae9] col-span-1 lg:col-span-2 rounded-lg flex flex-col h-full">
            <img
              src={image1}
              alt="Zahnkorrekturen mit unsichtbaren Zahnspangen"
              className="w-full max-w-96 mb-5"
            />
            <div className="h-20 mb-4">
              <p className="text-[#a3ab9e] text-xl font-semibold">
                Zahnkorrekturen mit unsichtbaren Zahnspangen
              </p>
            </div>
            <img src={kfoline} className="block w-20 mb-5" alt="Decorative line" />
            <p className="text-lg text-[#626262] flex-grow mb-6">
              Als Alternative zur festen Zahnspange bietet Ihnen unsere
              kieferorthopädische Praxis in Remagen die unauffällige und praktische 
              Zahnkorrektur mit durchsichtigen, herausnehmbaren Zahnschienen 
              (sogenannten Alignern). Aligner sind dünne, hochtransparente
              Kunststoffschienen.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>

          <div className="p-6 bg-[#e5ddd2] rounded-lg flex flex-col h-full">
            <img
              src={image2}
              alt="Sportmundschutz für Jugendliche und Erwachsene"
              className="w-full h-48 object-cover mb-5"
            />
            <div className="h-20 mb-4">
              <p className="text-[#c59e6a] text-xl font-semibold">
                Sportmundschutz für Jugendliche und Erwachsene
              </p>
            </div>
            <img src={kfoline} className="block w-20 mb-5" alt="Decorative line" />
            <p className="text-lg text-[#626262] flex-grow mb-6">
              Bei Kontaktsportarten oder Sportarten mit hohem Sturz- und
              Verletzungsrisiko kann es schnell zu Unfällen kommen – und nicht
              selten sind auch die Zähne betroffen. Daher empfehlen wir einen
              individuellen Sportmundschutz.
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>

          <div className="p-6 bg-[#e5ddd2] rounded-lg flex flex-col h-full">
            <img
              src={image3}
              alt="Behandlung von Kieferfehlstellungen"
              className="w-full h-48 object-cover mb-5"
            />
            <div className="h-20 mb-4">
              <p className="text-[#c59e6a] text-xl font-semibold">
                Behandlung von Kieferfehlstellungen in Zusammenarbeit mit
                chirurgischen Praxen
              </p>
            </div>
            <img src={kfoline} className="block w-20 mb-5" alt="Decorative line" />
            <p className="text-lg text-[#626262] flex-grow mb-6">
              Liegen Kieferfehlstellungen in ausgeprägter Form vor und / oder
              ist das Körperwachstum abgeschlossen, reicht eine rein
              kieferorthopädische Behandlung oft nicht mehr aus, um eine
              gesunde, physiologische Verzahnung zu erreichen. Dann wird in
              enger Zusammenarbeit mit einem ...
            </p>
            <Button variant="secondary">Mehr erfahren ...</Button>
          </div>

          <div className="p-6 bg-[#e5ddd2] col-span-1 lg:col-span-2 rounded-lg flex flex-col h-full">
            <img
              src={image4}
              alt="Schnarchtherapie"
              className="w-full max-w-96 mb-5"
            />
            <div className="h-20 mb-4">
              <p className="text-[#a3ab9e] text-xl font-semibold">
                Schnarchtherapie <b>für einen gesunden Schlaf</b>
              </p>
            </div>
            <img src={kfoline} className="block w-20 mb-5" alt="Decorative line" />
            <p className="text-lg text-[#626262] flex-grow mb-6">
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