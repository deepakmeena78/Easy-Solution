import { Toaster } from "react-hot-toast";
import Header from "./Components/Header/Header";
import Footer from "./Components/Home/Footer";
import Routing from "./Components/Routing";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
