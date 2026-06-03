import SecondaryButton from "../../Shared/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function Impact() {
  return (
    <div className="bg-DarkBluePrimary pt-16 text-white">
      <h1 className="text-base font-bold pb-3">Impact</h1>
      <h1 className="text-5xl font-light pb-5">Results that speak</h1>
      <p className="font-light text-base pb-6">
        Our clients see real growth across engagement, reach, and revenue.
      </p>
      <h1 className="text-5xl mb-2">3x</h1>
      <p className="font-light text-base pb-6 mr-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <h1 className="text-5xl mb-2">87%</h1>
      <p className="font-light text-base pb-6 mr-10">
        Lorem Ipsum dolor sit amet, consectetur adipisicing elit
      </p>
      {/* Buttons Section */}
      <div className="flex items-center gap-6 mb-12">
        <SecondaryButton text="Learn" /> Arrow
        <FontAwesomeIcon icon={faGreaterThan} />
      </div>
      <img
        src="./impact.png"
        alt="strategy_image"
        className="w-full h-auto object-cover pb-16"
      />
    </div>
  );
}

export default Impact;
