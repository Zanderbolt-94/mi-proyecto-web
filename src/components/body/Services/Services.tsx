import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButton from "../../Shared/SecondaryButton";
import Service from "./Service";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

interface Service {
  title: string;
  text: string;
  imageURL: string;
}

const ListOfServices: Service[] = [
  {
    title: "Social media strategy",
    text: "We build a roadmap that turns your audience into loyal customers.",
    imageURL: "./services_logo/strategy.png",
  },
  {
    title: "Content creation",
    text: "Posts, videos, and copy that resonate with the people who matter.",
    imageURL: "./services_logo/post.png",
  },
  {
    title: "Analytics and reporting",
    text: "Clear data that shows what's working and where to focus next.",
    imageURL: "./services_logo/analytics.png",
  },
];

function Services() {
  return (
    <div className="flex flex-col text-white items-center pt-16 md:gap-20">
      <div>
        <h1 className="text-base font-bold text-white pb-3 text-center">
          Services
        </h1>
        <p className="text-4xl text-center">What we do for your brand</p>
        <p className="text-center p-5 pb-12">
          ZanderBot handles the full spectrum of digital marketing. From
          planning to execution to measurement, we own the results.
        </p>
      </div>
      {/* Services Section */}
      <div className="flex flex-col  md:flex-row md">
        {ListOfServices.map((service) => {
          return (
            <Service
              text={service.text}
              imageURL={service.imageURL}
              title={service.title}
              key={service.title}
            />
          );
        })}
      </div>
      {/* Buttons Section */}
      <div className="flex items-center gap-6 pb-12">
        <SecondaryButton text="Start" /> Arrow
        <FontAwesomeIcon icon={faGreaterThan} />
      </div>
    </div>
  );
}

export default Services;
