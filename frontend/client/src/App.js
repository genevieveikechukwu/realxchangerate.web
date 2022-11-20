import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavComponent from "./components/NavComponent";
import Footer from "./components/Footer";

import "./assets/css/style.css";

import {
  Convert,
  Contact,
  Compliance,
  HelpCenter,
  News,
  Faq,
  IntegrationMatrix,
  Partnerships,
  CurrencyEncyclopedia,
  TermsAndConditions,
  Press,
  Careers,
  About,
  Teams,
  FileAComplaint,
  Api,
  BoardOfDirectors,
  HistoricalCurrencyExchange,
  FraudReport,
  CookiePolicy,
  Glossary,
  OnlineAdvertising,
  Ambassadors,
  Home,
  Welcome,
<<<<<<< HEAD
<<<<<<< HEAD
  Home,
=======
>>>>>>> 6af6b42d36ad5136bb43b3dd82358b85ed99379f
=======
>>>>>>> 048c076e840ce006d0a5a665a7a75f3d825fa627
} from "./Pages";
import GlobalStyle from "./styles/Globalstyle";
import ErrorPage from "./Pages/404/ErrorPage";

import SingleNews from "./Pages/SingleNews/SingleNews";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          <NavComponent />
          <Routes>
            {/*---==== Contents Sections  ====---*/}
            <Route path="/" element={<Home />} />
            <Route path="/convert" element={<Convert />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/news" element={<News />} />

            {/* Adding path for one news  */}
            <Route path="/news/:id" element={<SingleNews />} />

            <Route path="/faq" element={<Faq />} />
            <Route path="/integration-matrix" element={<IntegrationMatrix />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route
              path="/currency-encyclopedia"
              element={<CurrencyEncyclopedia />}
            />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/press" element={<Press />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/complaint" element={<FileAComplaint />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/api" element={<Api />} />
            <Route path="/bod" element={<BoardOfDirectors />} />
            <Route
              path="/historical-currency-exchange"
              element={<HistoricalCurrencyExchange />}
            />
            <Route path="/fraud-report" element={<FraudReport />} />
            <Route path="/Cookie-policy" element={<CookiePolicy />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/advertising" element={<OnlineAdvertising />} />
            <Route path="/ambassadors" element={<Ambassadors />} />
            <Route path="*" element={<ErrorPage />} />
            {/*---==== end of Contents Sections  ====---*/}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
