import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButton from "../../Shared/SecondaryButton";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function HowWeWork() {
  return (
    // Proven Section
    <div className="flex flex-col text-white items-center gap-3 pt-16 pb-14">
      {/* Proven Section */}
      <h1 className="text-base font-bold">Proven</h1>
      <h1 className="text-4xl">How We Work</h1>
      <p className="text-center text-lg pt-2 px-4 pb-6">
        Vaquero Robot combines smart automation with creative thinking to build
        campaigns that stick. We measure everything and adjust what isn't
        working.
      </p>
      {/* Buttons Section */}
      <div className="flex items-center gap-6 pb-12">
        <SecondaryButton text="Explore" /> Arrow
        <FontAwesomeIcon icon={faGreaterThan} />
      </div>
      {/* Menu Sextion */}
      <div className="flex gap-6 justify-between pb-12">
        <p className="border-b border-white">Strategy First</p>
        <p>Content Next</p>
        <p>Results Always</p>
      </div>
      {/* Image and Text Section */}
      {/* Reemplazamos w- por w-max y le ponemos un ancho máximo para controlar el tamaño de la foto */}
      <div className="border border-gray-500 overflow-hidden rounded-lg flex flex-col">
        <img
          src="./strategy_image.png"
          alt="strategy_image"
          className="w-full h-auto object-cover"
        />

        {/* El contenedor del texto */}
        <div className="p-6 flex flex-col gap-2">
          <h2 className="font-bold text-base text-gray-400">Strategy</h2>

          {/* Con text-4xl el texto es grande; usando normal-case y asegurando que haga break-words */}
          <p className="text-3xl font-normal wrap-break-word whitespace-normal">
            We map your audience and their behavior
          </p>
          <p className="text-base font-light wrap-break-word whitespace-normal pb-6">
            No guessing. No wasted spend. We know who to reach and why they'll
            listen.
          </p>
          {/* Buttons Section */}
          <div className="flex items-center gap-6">
            <SecondaryButton text="Read" /> Arrow
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
