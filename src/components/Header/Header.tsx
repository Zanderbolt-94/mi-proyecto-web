import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../Shared/PrimaryButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex justify-between items-center w-full">
      {/* BLOQUE IZQUIERDO: Controla el menú y la hamburguesa en el mismo espacio */}
      <div className="flex items-center min-w-30">
        {/* Menu en pantallas medianas+ */}
        <div className="md:block hidden">
          <div className="flex gap-8 text-white text-xl">
            <a href="">About us</a>
            <a href="">Services</a>
            <a href="">Resources</a>
          </div>
        </div>
        {/* Hamburguesa en móviles */}
        <div className="md:hidden">
          <FontAwesomeIcon size="2x" color="white" icon={faBars} />
        </div>
      </div>
      {/* BLOQUE CENTRAL: El Logo queda flotando exactamente en medio */}
      <div className="h-12 aspect-3/2 flex justify-center">
        <img
          src="/logo.png"
          className="w-full h-full object-contain"
          alt="logo"
        />
      </div>
      {/* BLOQUE DERECHO: El botón de contacto */}
      <div className="flex justify-end min-w-30">
        <PrimaryButton text="Contact" styles="text-base md:text-2xl" />
      </div>
    </div>
  );
}

export default Header;
