import kfoline from "../assets/Images/kfoline.png";

function HomeSectionThree() {
  return (
    <section className="bg-[#9ba99c] mt-12 mx-5 rounded-md">
      <div className="text-[#ffff] font-semibold mx-20 3xl:text-center  py-16 space-y-10 text-lg">
        <h3>Liebe Patientinnen und Patienten, liebe Eltern, liebe Kinder.</h3>
        <img src={kfoline} className="block w-full max-w-40  " />
        <p>
          Wir freuen uns, Sie in unserer kieferorthopädischen Praxis in Remagen
          begrüßen zu dürfen. Als Fachpraxis bieten wir moderne, qualitativ
          hochwertige Kieferorthopädie in angenehmer Atmosphäre. Neben unserem
          freundlichen Team tragen auch unsere modern und hell eingerichteten
          Räume dazu bei, dass Sie sich bei uns wohlfühlen können. Zudem ist
          unsere Praxis klimatisiert.
          <br />
          <br />
          Als Ihre Spezialisten für funktionelle und ästhetische
          Kieferorthopädie behandeln wir Kinder, Jugendliche und Erwachsene mit
          fachlicher Kompetenz und viel Einfühlungsvermögen.
        </p>
      </div>
    </section>
  );
}

export default HomeSectionThree;
