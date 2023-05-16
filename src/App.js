import "./App.css";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import WhyCrypto from "./components/WhyCrypto";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <Features />
      <WhyCrypto />
    </div>
  );
}

export default App;

// https://www.figma.com/file/njDkDgCLxA61YTt0hQAWoM/Final_File_Jobless_Website_1_?node-id=31-753&t=R1VAVr1pNZJQWjvm-0
