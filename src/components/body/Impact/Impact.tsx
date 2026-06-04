import SecondaryButton from "../../Shared/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function Impact() {
  return (
    <div className="bg-DarkBluePrimary pt-16 text-white flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-col md:w-1/2 md:justify-center md:items-start">
        <h1 className="text-base font-bold pb-3">Impact</h1>
        <h1 className="text-5xl font-light pb-5 md:text-7xl">
          Results that speak
        </h1>
        <p className="font-light text-base pb-6 md:text-2xl">
          Our clients see real growth across engagement, reach, and revenue.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-col">
            <h1 className="text-5xl mb-2">3x</h1>
            <p className="font-light text-base pb-6 mr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col md:flex-col">
            <h1 className="text-5xl mb-2">87%</h1>
            <p className="font-light text-base pb-6 mr-10">
              Lorem Ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </div>
        </div>
        {/* Buttons Section */}
        <div className="flex items-center gap-6 mb-12">
          <SecondaryButton text="Learn" /> Arrow
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
      </div>
      <img
        src="./impact.png"
        alt="strategy_image"
        className="w-full h-auto object-cover pb-16 md:w-1/2"
      />
    </div>
  );
}

export default Impact;
