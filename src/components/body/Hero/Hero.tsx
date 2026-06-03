import PrimaryButton from "../../Shared/PrimaryButton";
import SecondaryButton from "../../Shared/SecondaryButton";

function Hero() {
  return (
    <div className="my-12">
      <div className="border border-gray-500 overflow-hidden rounded-lg flex flex-col">
        <div className="flex flex-col p-8 gap-5">
          {/* Hero Title */}
          <h1 className="text-white text-4xl font-normal">
            Medium Length Hero Headline goes Here
          </h1>
          {/* Hero text */}
          <p className="text-white text-base font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          {/* Botones */}
          <div className="flex flex-row gap-4">
            <PrimaryButton text="Button" />
            <SecondaryButton text="Button" />
          </div>
        </div>
        {/* Imagen */}
        <img
          className="w-full h-auto object-cover"
          src="./section1_placeholder_image.png"
          alt="placeholder_image"
        />
      </div>
    </div>
  );
}

export default Hero;
