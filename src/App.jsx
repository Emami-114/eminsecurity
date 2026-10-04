import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EmergencyBanner from './components/EmergencyBanner';

// Pages
import HomePage from './pages/HomePage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import OffensiveSecurityPage from './pages/services/OffensiveSecurityPage';
import DefensiveSecurityPage from './pages/services/DefensiveSecurityPage';
import ItAdministrationPage from './pages/services/ItAdministrationPage';
import AwarenessTrainingPage from './pages/services/AwarenessTrainingPage';
import SoftwareTestingPage from './pages/services/SoftwareTestingPage';

import ComplianceOverviewPage from './pages/ComplianceOverviewPage';
import Nis2Page from './pages/compliance/Nis2Page';
import Iso27001Page from './pages/compliance/Iso27001Page';

import MagazinPage from './pages/MagazinPage';
import MagazinDetailPage from './pages/MagazinDetailPage';

import StandorteOverviewPage from './pages/StandorteOverviewPage';
import StandortDetailPage from './pages/StandortDetailPage';

import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import JobsPage from './pages/JobsPage';
import KnowledgePage from './pages/KnowledgePage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import SitemapPage from './pages/SitemapPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <EmergencyBanner />
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Services */}
          <Route path="/leistungen" element={<ServicesOverviewPage />} />
          <Route path="/leistungen/offensive-security" element={<OffensiveSecurityPage />} />
          <Route path="/leistungen/defensive-security" element={<DefensiveSecurityPage />} />
          <Route path="/leistungen/it-administration" element={<ItAdministrationPage />} />
          <Route path="/leistungen/awareness-training" element={<AwarenessTrainingPage />} />
          <Route path="/leistungen/software-testing" element={<SoftwareTestingPage />} />

          {/* Compliance */}
          <Route path="/compliance" element={<ComplianceOverviewPage />} />
          <Route path="/compliance/nis-2" element={<Nis2Page />} />
          <Route path="/compliance/iso-27001" element={<Iso27001Page />} />

          {/* Magazin */}
          <Route path="/magazin" element={<MagazinPage />} />
          <Route path="/magazin/:slug" element={<MagazinDetailPage />} />

          {/* Standorte */}
          <Route path="/standorte" element={<StandorteOverviewPage />} />
          <Route path="/standorte/:city" element={<StandortDetailPage />} />

          {/* Company & Legal */}
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/ueber-uns" element={<AboutUsPage />} />
          <Route path="/karriere" element={<JobsPage />} />
          <Route path="/wissen" element={<KnowledgePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
