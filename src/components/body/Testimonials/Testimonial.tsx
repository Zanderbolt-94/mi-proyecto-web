import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TestimonialData {
  rating: number;
  quote: string;
  profileImageURL: string;
  name: string;
  position: string;
  logoImageURL: string;
}

interface TestimonialProps {
  testimonial: TestimonialData;
}

function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="mt-16 text-white flex flex-col items-center  gap-6">
      {/* Stars */}
      <div className="flex gap-1 text-yellow-400">
        {Array.from({ length: 5 }, (_, index) => {
          // El index empieza en 0, así que le sumamos 1 para que las estrellas sean la 1, 2, 3, 4 y 5
          const estrellaNumero = index + 1;

          return (
            <FontAwesomeIcon
              key={index}
              size="2x"
              icon={faStar}
              className={
                estrellaNumero <= testimonial.rating
                  ? "text-yellow-400"
                  : "text-gray-600 opacity-30"
              }
            />
          );
        })}
      </div>
      <p className="text-xl font-light text-center">{testimonial.quote}</p>
      {/* User Info */}
      <div className="flex flex-col text-white items-center gap-4">
        <img className="w-18 h-18" src={testimonial.profileImageURL} alt="" />
        <p className="text-xl text-center">
          <strong> {testimonial.name} </strong> <br /> {testimonial.position}
        </p>
        <p></p>
        <img src={testimonial.logoImageURL} alt="" />
      </div>
    </div>
  );
}

export default Testimonial;
