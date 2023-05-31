import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NeedHelp from "./pages/NeedHelp";
import OffersHelp from "./pages/OffersHelp";
import RequestsList from "./pages/RequestsList";
import Test from "./pages/Test";
import HelpWaiting from "./pages/HelpWaiting";
import Thanks from "./pages/Thanks";

function App() {
  //localStorage.clear();
  return (
    <div className="App">
      <img
        className="hidden sm:block absolute w-full h-full object-cover -z-50"
        src="https://img.freepik.com/premium-photo/abstract-medical-background_1484-2530.jpg"
        alt="/"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/need-help" element={<NeedHelp />} />
        <Route path="/offers-help" element={<OffersHelp />} />
        <Route path="/requests" element={<RequestsList />} />
        <Route path="/waiting" element={<HelpWaiting />} />
        <Route path="/test" element={<Test />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
