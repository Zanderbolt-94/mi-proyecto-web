import Testimonial from "./Testimonial";

interface Testimonial {
  rating: number;
  quote: string;
  profileImageURL: string;
  name: string;
  position: string;
  logoImageURL: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote:
      "ZanderBot took our social media from invisible to impossible to ignore. The strategy was sharp, the execution was clean, and the results were real.",
    profileImageURL: "./testimonials/webflow/webflow_user.png",
    name: "Maria Santos",
    position: "Marketing directo, Coastal Goods",
    logoImageURL: "./testimonials/webflow/webflow.png",
  },
];

function Testimonials() {
  return (
    <div className="flex flex-col gap-6 pb-16 md:max-w-3xl mx-auto">
      {testimonials.map((testimonial) => {
        return <Testimonial testimonial={testimonial} />;
      })}
    </div>
  );
}

export default Testimonials;
