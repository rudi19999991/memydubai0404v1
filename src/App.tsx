import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import UAEKnowHow from './pages/UAEKnowHow';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './contexts/LanguageContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import ScrollReset from './components/ScrollReset';
import { Toaster } from './components/ui/toaster';
import Financing from './pages/Financing';
import ROI from './pages/ROI';
import CompanySetup from './pages/CompanySetup';
import PropertyUpload from './pages/Admin/PropertyUpload';
import BlogUpload from './pages/Admin/BlogUpload';
import CryptoBuying from './pages/CryptoBuying';
import AreaDetail from './pages/AreaDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CookieConsent from './components/compliance/CookieConsent';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Impressum from './pages/Impressum';
import AdminLayout from './components/layouts/AdminLayout';
import BlogDetail from './pages/BlogDetail';
import BlogPostForm from './pages/admin/BlogPostForm';
import Admin from './pages/Admin';
import Login from './pages/Login'; // Optional login page
import ProtectedRoute from './components/ProtectedRoute'; // ✅ Create this

// Optional: Wrap with Supabase Session Context if you use useSession globally
import { SupabaseProvider } from './providers/SupabaseProvider'; // ✅ Create this too

function App() {
  return (
    <Router>
      <SupabaseProvider>
        <LanguageProvider>
          <CurrencyProvider>
            <ScrollReset />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetail />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/uae-know-how" element={<UAEKnowHow />} />
              <Route path="/financing" element={<Financing />} />
              <Route path="/roi" element={<ROI />} />
              <Route path="/company-setup" element={<CompanySetup />} />
              <Route path="/crypto-buying" element={<CryptoBuying />} />
              <Route path="/area/:id" element={<AreaDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />

              {/* Admin routes */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/property-upload" element={<AdminLayout><PropertyUpload /></AdminLayout>} />
              <Route path="/admin/blog-upload" element={<AdminLayout><BlogUpload /></AdminLayout>} />

              {/* ✅ Protected blog creation route */}
              <Route
                path="/admin/blog/new"
                element={
                  <ProtectedRoute>
                    <AdminLayout>
                      <BlogPostForm />
                    </AdminLayout>
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Toaster />
            <CookieConsent />
          </CurrencyProvider>
        </LanguageProvider>
      </SupabaseProvider>
    </Router>
  );
}

export default App;
