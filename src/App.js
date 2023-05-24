import "./App.css";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import WhyCrypto from "./components/WhyCrypto";
import SliderComp from "./components/SliderComp";
import Category from "./components/Category";
import LightForm from "./components/LightForm";
import JoinUs from "./components/JoinUs";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <Features />
      <WhyCrypto />
      <SliderComp />
      <Category />
      <LightForm />
      <JoinUs />
    </div>
  );
}

export default App;

// https://www.figma.com/file/njDkDgCLxA61YTt0hQAWoM/Final_File_Jobless_Website_1_?node-id=31-753&t=R1VAVr1pNZJQWjvm-0
