import PrimaryButton from "../../Shared/PrimaryButton";
import SecondaryButton from "../../Shared/SecondaryButton";

function Hero() {
  return (
    <div className="my-12">
      {/* Container Principal */}
      <div className="border border-gray-500 overflow-hidden rounded-lg flex flex-col md:flex-row">
        <div className="flex flex-col p-8 gap-5 md:justify-center md:px-14 md:gap-10 md:w-1/2">
          {/* Hero Title */}
          <h1 className="text-white text-4xl font-normal md:text-8xl">
            Medium Length Hero Headline goes Here
          </h1>
          {/* Hero text */}
          <p className="text-white text-base font-light md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          {/* Botones */}
          <div className="flex flex-row gap-4">
            <PrimaryButton text="Button" styles="text-2xl" />
            <SecondaryButton text="Button" styles="text-2xl" />
          </div>
        </div>
        {/* Imagen */}
        <img
          className="w-full h-auto object-cover md:w-1/2"
          src="./section1_placeholder_image.png"
          alt="placeholder_image"
        />
      </div>
    </div>
  );
}

export default Hero;
