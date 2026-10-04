import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Services (English routing) */}
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/offensive-security" element={<OffensiveSecurityPage />} />
          <Route path="/services/defensive-security" element={<DefensiveSecurityPage />} />
          <Route path="/services/it-administration" element={<ItAdministrationPage />} />
          <Route path="/services/awareness-training" element={<AwarenessTrainingPage />} />
          <Route path="/services/software-testing" element={<SoftwareTestingPage />} />

          {/* Legacy /leistungen redirects */}
          <Route path="/leistungen" element={<Navigate to="/services" replace />} />
          <Route path="/leistungen/offensive-security" element={<Navigate to="/services/offensive-security" replace />} />
          <Route path="/leistungen/defensive-security" element={<Navigate to="/services/defensive-security" replace />} />
          <Route path="/leistungen/it-administration" element={<Navigate to="/services/it-administration" replace />} />
          <Route path="/leistungen/awareness-training" element={<Navigate to="/services/awareness-training" replace />} />
          <Route path="/leistungen/software-testing" element={<Navigate to="/services/software-testing" replace />} />

          {/* Compliance */}
          <Route path="/compliance" element={<ComplianceOverviewPage />} />
          <Route path="/compliance/nis-2" element={<Nis2Page />} />
          <Route path="/compliance/iso-27001" element={<Iso27001Page />} />

          {/* Magazine */}
          <Route path="/magazine" element={<MagazinPage />} />
          <Route path="/magazine/:slug" element={<MagazinDetailPage />} />
          <Route path="/magazin" element={<Navigate to="/magazine" replace />} />
          <Route path="/magazin/:slug" element={<MagazinDetailPage />} />

          {/* Locations */}
          <Route path="/locations" element={<StandorteOverviewPage />} />
          <Route path="/locations/:city" element={<StandortDetailPage />} />
          <Route path="/standorte" element={<Navigate to="/locations" replace />} />
          <Route path="/standorte/:city" element={<StandortDetailPage />} />

          {/* Company & Legal */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/kontakt" element={<Navigate to="/contact" replace />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/ueber-uns" element={<Navigate to="/about-us" replace />} />
          <Route path="/careers" element={<JobsPage />} />
          <Route path="/karriere" element={<Navigate to="/careers" replace />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/wissen" element={<Navigate to="/knowledge" replace />} />
          <Route path="/imprint" element={<ImpressumPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/privacy" element={<DatenschutzPage />} />
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
