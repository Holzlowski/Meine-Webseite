import { Container } from 'react-bootstrap';
import NavigationBar from './components/Navigation/Navbar';
import avatarImage from './assets/images/Avatar.png'; // Beispiel für ein Avatar-Bild
import './App.css';

function App() {
  return (
    <>
      {/* Vollbild-Hintergrundbild */}
      <div className="fullscreen-bg"></div>
      <img src={avatarImage} alt="Mein Avatar" className='avatar-center'></img>
      
      {/* Navigation */}
      <NavigationBar />

      {/* Hauptbereich */}
      <Container className="mt-4">

      </Container>
    </>
  );
}

export default App;