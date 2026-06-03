import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../Shared/PrimaryButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex gap-4 justify-between items-center">
      {/* Hamburguer Icon */}
      <FontAwesomeIcon size="2x" color="white" icon={faBars} />
      {/* Contenedor controlado para la imagen */}
      <div className="h-12 aspect-3/2">
        <img
          src="/logo.png"
          className="w-full h-full object-contain"
          alt="logo"
        />
      </div>
      <PrimaryButton text="Contact" styles="text-base" />
    </div>
  );
}

export default Header;
