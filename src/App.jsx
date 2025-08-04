import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutEvent from './components/AboutEvent';
import EventOverview from './components/EventOverview';
import Highlights from './components/Highlights';
import StrategicObjectives from './components/StrategicObjectives';
import LogisticsFacilities from './components/LogisticsFacilities';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import ManagementTeam from './components/ManagementTeam';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="bg-sky-950 text-white font-sans min-h-screen">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutEvent />
                <EventOverview />
                <Highlights />
                <StrategicObjectives />
                <LogisticsFacilities />
                <Schedule />
                <Contact />
                <ManagementTeam />
              </>
            }
          />

          <Route path="/register" element={<RegisterPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
