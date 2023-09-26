import "./App.css";
import Contact from "./Components/Contact/Contact";
import CopyRight from "./Components/CopyRight/CopyRight";
import Faq from "./Components/Faq/Faq";

import HeroSection from './Components/HeroSection/HeroSection';
import Info from "./Components/Info/Info";

import Navbar from "./Components/Navbar/Navbar";
import Schedule from "./Components/Schedule/Schedule";
import Subscribe from "./Components/Subscribe/Subscribe";
import SwiperComponent from "./Components/SwiperComponent/SwiperComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <Schedule />
      <SwiperComponent/>
      <Info/>
      <Faq/>
      <Subscribe/>
      <Contact/>
      <CopyRight/>
    </div>
  );
}

export default App;
