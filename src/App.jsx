import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Vision from "./components/Vision";
import FeaturedSermon from "./components/FeaturedSermon";
import UpcomingEvents from "./components/UpcomingEvents";
import PlanYourVisit from "./components/PlanYourVisit";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Vision />
        <FeaturedSermon />
        <UpcomingEvents />
        <PlanYourVisit />
      </main>

      <Footer />
    </>
  );
}

export default App;
