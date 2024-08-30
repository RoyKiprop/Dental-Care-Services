import ToothLogo from "../assets/Images/ToothLogo.png";
import Button from "./Button";

function HomeAppointment() {
  return (
    <section>
      <div className="flex flex-col mt-10 space-y-16 items-center">
        <img src={ToothLogo} className="block w-full max-w-sm" />
        <div className="space-y-4">
          <h2 className="text-2xl text-[#9BA99D] font-medium text-center">
            Ihre kieferorthopädische Praxis an Rhein und Ahr
          </h2>
          <h1 className="text-3xl text-[#c7986a] font-medium text-center max-w-4xl">
            Mit herausnehmbaren, festsitzenden oder unsichtbaren Zahnspangen zum
            perfekten Lächeln
          </h1>
        </div>

        <Button variant="primary">Jetzt Termin online vereinbaren!</Button>
      </div>
    </section>
  );
}

export default HomeAppointment;
