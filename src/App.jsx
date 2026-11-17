import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import ExplorePage from "./pages/ExplorePage";
import DynamicContentPage from "./pages/DynamicContentPage";
import ScrollToTop from "./components/ScrollToTop";
import AIAssistantModal from "./components/AIAssistantModal";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AIAssistantModal />
      <Routes>
        {/* Main Portfolio Single-Page Home */}
        <Route path="/" element={<HomePage />} />

        {/* Directory & All Pages Hub */}
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/sitemap" element={<ExplorePage />} />

        {/* Dynamic & Direct Slugs for Category Deep-Dives */}
        <Route path="/skills/:slug" element={<DynamicContentPage />} />
        <Route path="/experience/:slug" element={<DynamicContentPage />} />
        <Route path="/startups/:slug" element={<DynamicContentPage />} />
        <Route path="/services/:slug" element={<DynamicContentPage />} />
        <Route path="/about/:slug" element={<DynamicContentPage />} />
        <Route path="/location/:slug" element={<DynamicContentPage />} />

        {/* Explicit Route Mappings for Guaranteed Navigation */}
        <Route path="/skills/react-nextjs" element={<DynamicContentPage directSlug="react-nextjs" />} />
        <Route path="/skills/nodejs-backend" element={<DynamicContentPage directSlug="nodejs-backend" />} />
        <Route path="/skills/database-engineering" element={<DynamicContentPage directSlug="database-engineering" />} />
        <Route path="/skills/cloud-devops" element={<DynamicContentPage directSlug="cloud-devops" />} />
        <Route path="/skills/typescript-system-design" element={<DynamicContentPage directSlug="typescript-system-design" />} />
        <Route path="/skills/rest-graphql-apis" element={<DynamicContentPage directSlug="rest-graphql-apis" />} />

        <Route path="/experience/space-to-tech" element={<DynamicContentPage directSlug="space-to-tech" />} />
        <Route path="/experience/eureka-forbes" element={<DynamicContentPage directSlug="eureka-forbes" />} />
        <Route path="/experience/unigoal" element={<DynamicContentPage directSlug="unigoal" />} />
        <Route path="/experience/lygato" element={<DynamicContentPage directSlug="lygato" />} />
        <Route path="/experience/eduminatti" element={<DynamicContentPage directSlug="eduminatti" />} />

        <Route path="/startups/uniportal" element={<DynamicContentPage directSlug="uniportal" />} />
        <Route path="/startups/kumaun-software" element={<DynamicContentPage directSlug="kumaun-software" />} />

        <Route path="/services/freelance-consulting" element={<DynamicContentPage directSlug="freelance-consulting" />} />
        <Route path="/services/mvp-development" element={<DynamicContentPage directSlug="mvp-development" />} />
        <Route path="/services/hire-fullstack-developer" element={<DynamicContentPage directSlug="hire-fullstack-developer" />} />

        <Route path="/about/mca-journey" element={<DynamicContentPage directSlug="mca-journey" />} />

        {/* Location-Based Regional & Nearby Tech Hub Routes */}
        <Route path="/location/khatima-uttarakhand" element={<DynamicContentPage directSlug="khatima-uttarakhand" />} />
        <Route path="/location/dehradun" element={<DynamicContentPage directSlug="dehradun" />} />
        <Route path="/location/haldwani-nainital" element={<DynamicContentPage directSlug="haldwani-nainital" />} />
        <Route path="/location/delhi-ncr" element={<DynamicContentPage directSlug="delhi-ncr" />} />
        <Route path="/location/noida-tech-hub" element={<DynamicContentPage directSlug="noida-tech-hub" />} />
        <Route path="/location/remote-worldwide" element={<DynamicContentPage directSlug="remote-worldwide" />} />

        {/* Dedicated Legal & Compliance Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        {/* Fallback Catch-All */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
