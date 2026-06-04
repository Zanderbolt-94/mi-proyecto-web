import SecondaryButton from "../Shared/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="pt-12">
      <div className="flex flex-col md:flex-row md:gap-32">
        <div className="flex flex-col items-start gap-10 text-white pb-12 md:flex-row">
          <div className="h-12 aspect-3/2">
            <img
              src="/logo.png"
              className="w-full h-full object-contain"
              alt="logo"
            />
          </div>
          <div>
            <h1 className="font-bold pb-3">Services</h1>
            <ul className="flex flex-col gap-2">
              <li>Social Media</li>
              <li>Content strategy</li>
              <li>Campaign management</li>
              <li>Analytics reports</li>
              <li>Resources</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold pb-3">Blog posts</h1>
            <ul className="flex flex-col gap-2">
              <li>Case studies</li>
              <li>Marketing guides</li>
              <li>Industry insights</li>
              <li>Video tutorials</li>
              <li>Company</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold pb-3">About Us</h1>
            <ul className="flex flex-col gap-2">
              <li>Our team</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Press kit</li>
              <li>Updates</li>
            </ul>
          </div>
        </div>
        {/* NewsLetter */}
        <div className="text-white flex flex-col gap-4">
          <div>
            <h1 className="font-bold pb-3">Newsletter</h1>
            <p className="text-base font-light">
              Get the latest marketing strategies and platform updates delivered
              straight to your inbox.
            </p>
          </div>
          {/* Input y Boton */}
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="your@email.com"
              className="w-full border-b border-gray-500"
            />
            <SecondaryButton text="Subscribe" styles="w-full md:text-xl" />
          </div>
          <p className="font-light pb-12 border-b border-gray-500 md:border-none">
            We respect your privacy and only send relevant content to help your
            business grow.
          </p>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:border-b md:border-gray-500">
        <div className="flex pt-6 gap-3 pb-8">
          <FontAwesomeIcon color="white" size="lg" icon={faFacebook} />
          <FontAwesomeIcon color="white" size="lg" icon={faInstagram} />
          <FontAwesomeIcon color="white" size="lg" icon={faX} />
          <FontAwesomeIcon color="white" size="lg" icon={faLinkedin} />
          <FontAwesomeIcon color="white" size="lg" icon={faYoutube} />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white">
          <p className="underline">Privacy Policy</p>
          <p className="underline">Terms of Service</p>
          <p className="underline">Cookies Settings</p>
          <p className="text-white pt-8 md:pt-0">
            © 2024 ZanderBot. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
