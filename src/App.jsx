import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import SystemintegrationPage from './pages/services/SystemintegrationPage';
import CloudServicesPage from './pages/services/CloudServicesPage';
import SoftwareDevelopmentPage from './pages/services/SoftwareDevelopmentPage';
import VoipCommunicationPage from './pages/services/VoipCommunicationPage';
import SecurityMonitoringPage from './pages/services/SecurityMonitoringPage';

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
          
          {/* Services (5 Core Pillars) */}
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/systemintegration" element={<SystemintegrationPage />} />
          <Route path="/services/cloud-services" element={<CloudServicesPage />} />
          <Route path="/services/softwareentwicklung" element={<SoftwareDevelopmentPage />} />
          <Route path="/services/voip-telefonie" element={<VoipCommunicationPage />} />
          <Route path="/services/security-ueberwachung" element={<SecurityMonitoringPage />} />

          {/* Legacy & alias redirects */}
          <Route path="/services/it-administration" element={<Navigate to="/services/systemintegration" replace />} />
          <Route path="/services/offensive-security" element={<Navigate to="/services/security-ueberwachung" replace />} />
          <Route path="/services/defensive-security" element={<Navigate to="/services/security-ueberwachung" replace />} />
          <Route path="/services/software-testing" element={<Navigate to="/services/softwareentwicklung" replace />} />
          <Route path="/services/awareness-training" element={<Navigate to="/services" replace />} />

          {/* German /leistungen redirects */}
          <Route path="/leistungen" element={<Navigate to="/services" replace />} />
          <Route path="/leistungen/systemintegration" element={<Navigate to="/services/systemintegration" replace />} />
          <Route path="/leistungen/cloud-services" element={<Navigate to="/services/cloud-services" replace />} />
          <Route path="/leistungen/softwareentwicklung" element={<Navigate to="/services/softwareentwicklung" replace />} />
          <Route path="/leistungen/voip-telefonie" element={<Navigate to="/services/voip-telefonie" replace />} />
          <Route path="/leistungen/security-ueberwachung" element={<Navigate to="/services/security-ueberwachung" replace />} />
          <Route path="/leistungen/offensive-security" element={<Navigate to="/services/security-ueberwachung" replace />} />
          <Route path="/leistungen/defensive-security" element={<Navigate to="/services/security-ueberwachung" replace />} />
          <Route path="/leistungen/it-administration" element={<Navigate to="/services/systemintegration" replace />} />
          <Route path="/leistungen/software-testing" element={<Navigate to="/services/softwareentwicklung" replace />} />
          <Route path="/leistungen/awareness-training" element={<Navigate to="/services" replace />} />

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
