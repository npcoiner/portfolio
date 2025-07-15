import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <Header />
      <main className="flex-grow">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;

