import { Container } from 'react-bootstrap';
import NavigationBar from './components/Navigation/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ContentSection from './components/ContentSection/ContentSection';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import './App.css';

function App() {
  return (
    <>
      {/* Hintergrundbild */}
      <BackgroundImage />
      
      {/* Navigation */}
      <NavigationBar className="fixed-navbar" />

      {/* Hero-Sektion mit 3D-Animation */}
      <HeroSection />

      {/* Scrollbarer Inhaltsbereich */}
      <ContentSection />
    </>
  );
}

export default App;