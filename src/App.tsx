import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { AboutPage } from './pages/AboutPage';
import { SchedulerPage } from './pages/SchedulerPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-dark text-gray-100 flex flex-col selection:bg-brand-gold selection:text-brand-dark">
        
        {/* Floating frosted glass navigation */}
        <Header />
        
        {/* Main page content injection point */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/scheduler" element={<SchedulerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Catch-all fallback redirect */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        {/* Legal regulatory disclosures & contact footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
