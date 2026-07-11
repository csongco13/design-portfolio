import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects"
import Art from "./components/Art"

function App() {
  return (
    <main className="portfolio-page">
      <Navbar />
      <Home />
      <Projects />
      <Art />
    </main>
  );
}

export default App;