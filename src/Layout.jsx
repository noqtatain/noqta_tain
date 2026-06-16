import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from './components/WhatsAppButton';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const isPortal = currentPageName?.toLowerCase() === 'portal'
    || location.pathname.toLowerCase().startsWith('/portal');
  const isFustoqahOffer = currentPageName?.toLowerCase() === 'fustoqahoffer'
    || location.pathname.toLowerCase().startsWith('/fustoqah-offer')
    || location.pathname.toLowerCase().startsWith('/fustoqahoffer');
  const isProfile = currentPageName?.toLowerCase() === 'profile'
    || location.pathname.toLowerCase().startsWith('/profile');
  const isHobaGalaxy = currentPageName?.toLowerCase() === 'hobagalaxy'
    || location.pathname.toLowerCase().startsWith('/hobagalaxy');
  const isEliteCons = currentPageName?.toLowerCase() === 'elitecons'
    || location.pathname.toLowerCase().startsWith('/elitecons');
  const isEliteConstruction = currentPageName?.toLowerCase() === 'eliteconstruction'
    || location.pathname.toLowerCase().startsWith('/eliteconstruction')
    || location.pathname.toLowerCase().startsWith('/elite-construction');
  const isDroobPlan = currentPageName?.toLowerCase() === 'droobplan'
    || location.pathname.toLowerCase().startsWith('/droob_plan')
    || location.pathname.toLowerCase().startsWith('/droob-plan');
  const hideSiteChrome = isPortal || isFustoqahOffer || isProfile || isHobaGalaxy || isEliteCons || isEliteConstruction || isDroobPlan;

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'الرئيسية', page: 'Home' },
    { name: 'من نحن', page: 'About' },
    { name: 'الخدمات', page: 'Services' },
    { name: 'لماذا نحن', page: 'why-us' },
    { name: 'المدونة', page: 'Blog' },
    { name: 'تواصل معنا', page: 'Contact' },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');
        
        :root {
          --color-primary: #0F172A;
          --color-secondary: #F8FAFC;
          --color-accent: #8B5CF6;
          --color-text: #64748B;
        }
        
        * {
          font-family: 'Tajawal', sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .dark .glass-effect {
          background: rgba(15, 23, 42, 0.8);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #8B5CF6;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #7C3AED;
        }
      `}</style>

      {!hideSiteChrome && (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to={createPageUrl('Home')} className="flex items-center gap-2">
                <motion.div 
                  className="flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">نقطتين</span>
                  <span className="text-violet-500 text-3xl font-bold">..</span>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`text-sm font-medium transition-colors duration-200 relative group ${
                      currentPageName === link.page
                        ? 'text-violet-600 dark:text-violet-400'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    {currentPageName === link.page && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-violet-600 dark:bg-violet-400"
                      />
                    )}
                  </Link>
                ))}
                
                {/* Theme Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <AnimatePresence mode="wait">
                    {darkMode ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={20} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <Link
                  to={createPageUrl('portal')}
                  className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 hover:shadow-lg"
                >
                  تسجيل الدخول
                </Link>

                <Link
                  to={createPageUrl('Contact')}
                  className="bg-slate-900 dark:bg-violet-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 dark:hover:bg-violet-700 transition-all duration-200 hover:shadow-lg"
                >
                  احجز استشارة
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center gap-2 md:hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
                
                <Link
                  to={createPageUrl('portal')}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-2"
                >
                  دخول
                </Link>
                
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-slate-600 dark:text-slate-400"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
              >
                <div className="px-4 py-6 space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.page}
                      to={createPageUrl(link.page)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-base font-medium py-2 ${
                        currentPageName === link.page
                          ? 'text-violet-600 dark:text-violet-400'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    to={createPageUrl('Contact')}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center bg-slate-900 dark:bg-violet-600 text-white px-6 py-3 rounded-full text-sm font-medium mt-4"
                  >
                    احجز استشارة
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      )}

      {/* Main Content */}
      <main className={hideSiteChrome ? undefined : "pt-20"}>
        {children}
      </main>

      {/* Footer */}
      {!hideSiteChrome && (
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-10 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-xl font-bold">نقطتين</span>
                  <span className="text-violet-400 text-2xl font-bold">..</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  وكالة تسويق رقمي وأتمتة أعمال في السعودية. نرفع الأداء والمبيعات عبر استراتيجية واضحة، محتوى مؤثر، وإعلانات مدفوعة
                  بقياس دقيق.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3">روابط سريعة</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {navLinks.map((link) => (
                    <li key={link.page}>
                      <Link to={createPageUrl(link.page)} className="hover:text-violet-400 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/privacy-policy" className="hover:text-violet-400 transition-colors">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service" className="hover:text-violet-400 transition-colors">
                      Terms of service
                    </Link>
                  </li>
                  <li>
                    <Link to="/noqtachat-eula" className="hover:text-violet-400 transition-colors">
                      NOQTACHAT EULA
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3">تواصل معنا</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <a href="mailto:info@noqtatain.com" className="block hover:text-violet-400 transition-colors">
                    info@noqtatain.com
                  </a>
                  <a href="https://wa.me/966543569492" className="block hover:text-violet-400 transition-colors">
                    966543569492
                  </a>
                </div>
              </div>
            </div>

            <div className="text-slate-500 text-sm mt-8">
              © {new Date().getFullYear()} نقطتين
            </div>
          </div>
        </footer>
      )}

      {/* WhatsApp Floating Button */}
      {!hideSiteChrome && <WhatsAppButton />}
    </div>
  );
}
