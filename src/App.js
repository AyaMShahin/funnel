import "./App.css";
import Ceo from "./components/ceo/Ceo";
import CustomerData from "./components/customerData/CustomerData";
import Dashboards from "./components/dashboards/Dashboards";
import Features from "./components/features/Features";
import Founders from "./components/founders/Founders";
import Funnelflow from "./components/funnelFlow/Funnelflow";
import Integrations from "./components/integration/Integrations";
import SiteModal from "./components/modal/SiteModal";
import Sitenavbar from "./components/navbar/Sitenavbar";
import Reviews from "./components/reviews/Reviews";
import SecondCEO from "./components/secondCEO/SecondCEO";
import SiteFooter from "./components/siteFooter/SiteFooter";
import Siteheader from "./components/siteHeader/Siteheader";

function App() {
  return (
    <div className="App">
      <Sitenavbar />
      <SiteModal />
      <Siteheader />
      <Founders />
      <Dashboards />
      <Funnelflow />
      <Ceo />
      <CustomerData />
      <Integrations />
      <SecondCEO />
      <Features />
      <Reviews />
      <SiteFooter />
    </div>
  );
}

export default App;
