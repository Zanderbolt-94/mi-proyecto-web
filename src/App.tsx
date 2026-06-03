import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Audit from "./components/body/Audit/Audit";
import Hero from "./components/body/Hero/Hero";
import HowWeWork from "./components/body/HowWeWork/HowWeWork";
import Impact from "./components/body/Impact/Impact";
import Services from "./components/body/Services/Services";
import Testimonials from "./components/body/Testimonials/Testimonials";

function App() {
  return (
    <div>
      {/* // Container Principal con Color azul */}
      <div className="bg-DarkBluePrimary p-5">
        <Header />
        {/* Body Section */}
        <Hero />
      </div>
      <div className="bg-black p-5">
        <HowWeWork />
        <Services />
      </div>
      <div className="bg-DarkBluePrimary p-5">
        <Impact />
        <Testimonials />
      </div>
      <div className="bg-black p-5">
        <Audit />
        <Footer />
      </div>
    </div>
  );
}

export default App;
