import { Navbar } from "./components/Navbar";
import { Note } from "./components/Note";
import { Footer } from "./components/Foot";

export const App = () => {
  return (
    <section id="app" className="font-dosis">
      <Navbar />
      <Note />
      <Footer />
    </section>
  );
};
