import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Layout from "./components/Layout";
import Error404 from "./pages/Error404";
import WizardForm from './pages/WizardForm'
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import CGU from "./pages/CGU";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQs";
import Step3Form from "./components/Step3Form";
import CongratulateContent from "./pages/CongratulateContent";

function App() {
    return (
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/demande/3" element={<Step3Form />} />
          <Route path="/nous-contacter" element={<ContactPage />} />
          <Route path="/a-propos-de-l'appli-events" element={<AboutUs />} />
          <Route path="/Events-usedFolder/conditions-generales-utilisations" element={<CGU />} />
          <Route path="/Events-usedFolder/politique-confidentielle" element={<PrivacyPolicy />} />
          <Route path="/Events-usedFolder/FAQs-events" element={<FAQs />} />
          <Route path="/Congratulate/sender/:token/71190cff-131a-69fce9a4f1b6" element={<CongratulateContent />} />
          {/* <Route path="/Congratulaire/sender/71190cff-131a-:token_enr-69fce9a4f1b6" element={<CongratulateSender />} /> */}
          {/* // ROUTED DES PAGES DE FORMULAIRES DE DEMANDE */}
          <Route path="/demande" element={<WizardForm />} />
        </Route>
      </Routes>
    );
}

export default App;
