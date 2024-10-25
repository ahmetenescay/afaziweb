import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeProvider from './ThemeContext';
import Home from './pages/Home';
import AfaziInfo from './pages/AfaziInfo';
import Treatment from './pages/Treatment';
import Research from './pages/Research';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';
import { useAuth } from './context/AuthContext';
import ContactForm from './pages/ContactForm';
import ResearchDetail from './pages/ResearchDetail';
import CreateResearch from './pages/CreateResearch';
import EditResearch from './pages/EditResearch';
import ArticlesPage from './pages/ArticlesPage';
import ArticlesDetail from './pages/ArticleDetail';
function App() {
  const { currentUser } = useAuth();

  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/afazi-info" element={<AfaziInfo />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticlesDetail />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/:id" element={<ResearchDetail />} />
            <Route path="/create-research" element={<CreateResearch />} />
            <Route path="/edit-research/:id" element={<EditResearch />} />
            {currentUser?.role === 'doctor' && (
              <Route path="/dashboard" element={<DoctorDashboard />} />
            )}
            {currentUser?.role === 'patient' && (
              <Route path="/dashboard" element={<PatientDashboard />} />
            )}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
