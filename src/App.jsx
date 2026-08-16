import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import NavigationTracker from '@/lib/NavigationTracker'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Makyol from '@/pages/Makyol';
import FeedzPlan from '@/pages/FeedzPlan';
import LathaLamma from '@/pages/LathaLamma';
import SeedxOffer from '@/pages/Seedx-offer';
import Alwesam from '@/pages/Alwesam';
import BgtOffer from '@/pages/BgtOffer';
import MotorMindOffer from '@/pages/MotorMindOffer';
import LamasatProposal from '@/pages/Lamasat-Noqtatain-Proposal';
import WameerDiagnostic from '@/pages/WameerDiagnostic';
import WameerProposal from '@/pages/WameerProposal';
import AlsaifLawProposal from '@/pages/AlsaifLawProposal';
import RassenAltayfProposal from '@/pages/RassenAltayfProposal';
import KafGroupProposal from '@/pages/KafGroupProposal';
import BilqalamProposal from '@/pages/BilqalamProposal';
import YaseerProposal from '@/pages/YaseerProposal';
import DpowerProposal from '@/pages/DpowerProposal';
import HikalarabaProposal from '@/pages/HikalarabaProposal';
import WorkshopBitrix24Zid from '@/pages/WorkshopBitrix24Zid';
import TryBitrix24Zid from '@/pages/TryBitrix24Zid';
import WorkshopHub from '@/pages/workshop/WorkshopHub';
import WorkshopSlides from '@/pages/workshop/WorkshopSlides';
import WorkshopDiagnostic from '@/pages/workshop/WorkshopDiagnostic';
import WorkshopScenario from '@/pages/workshop/WorkshopScenario';
import WorkshopGapMap from '@/pages/workshop/WorkshopGapMap';
import WorkshopBook from '@/pages/workshop/WorkshopBook';
import WorkshopFeedback from '@/pages/workshop/WorkshopFeedback';
import WorkshopAdmin from '@/pages/workshop/WorkshopAdmin';
import Workshop15Min from '@/pages/workshop/Workshop15Min';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/makyol" element={<Makyol />} />
      <Route path="/feedz" element={<FeedzPlan />} />
      <Route path="/latha-lamma" element={<LathaLamma />} />
      <Route path="/seedx-offer" element={<SeedxOffer />} />
      <Route path="/alwesam" element={<Alwesam />} />
      <Route path="/bgt" element={<BgtOffer />} />
      <Route path="/q/02135" element={<MotorMindOffer />} />
      <Route path="/q/011293" element={<LamasatProposal />} />
      <Route path="/q/01194" element={<WameerDiagnostic />} />
      <Route path="/q/01194-proposal" element={<WameerProposal />} />
      <Route path="/q/01141" element={<AlsaifLawProposal />} />
      <Route path="/q/1142" element={<RassenAltayfProposal />} />
      <Route path="/q/1143" element={<KafGroupProposal />} />
      <Route path="/bilqalam" element={<BilqalamProposal />} />
      <Route path="/yaseer" element={<YaseerProposal />} />
      <Route path="/dpower" element={<DpowerProposal />} />
      <Route path="/hikalaraba" element={<HikalarabaProposal />} />
      <Route path="/workshop" element={<WorkshopBitrix24Zid />} />
      <Route path="/try-bitrix24" element={<TryBitrix24Zid />} />
      <Route path="/agenda" element={<WorkshopHub />} />
      <Route path="/slides" element={<WorkshopSlides />} />
      <Route path="/activities/diagnostic" element={<WorkshopDiagnostic />} />
      <Route path="/activities/scenario" element={<WorkshopScenario />} />
      <Route path="/activities/gap-map" element={<WorkshopGapMap />} />
      <Route path="/book" element={<WorkshopBook />} />
      <Route path="/15min" element={<Workshop15Min />} />
      <Route path="/feedback" element={<WorkshopFeedback />} />
      <Route path="/admin" element={<WorkshopAdmin />} />
      <Route path="/" element={
        <LayoutWrapper currentPageName={mainPageKey}>
          <MainPage />
        </LayoutWrapper>
      } />
      {Object.entries(Pages).map(([path, Page]) => (
        <Route
          key={path}
          path={`/${path}`}
          element={
            <LayoutWrapper currentPageName={path}>
              <Page />
            </LayoutWrapper>
          }
        />
      ))}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <NavigationTracker />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
