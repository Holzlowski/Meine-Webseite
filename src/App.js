import { Container } from 'react-bootstrap';
import NavigationBar from './components/Navigation/Navbar';
import avatarImage from './assets/images/Avatar.png'; // Beispiel für ein Avatar-Bild
import karte1 from './assets/images/skillkarten/Alchemielabor.png';
import karte2 from './assets/images/skillkarten/Wüstensand.png';
import karte3 from './assets/images/skillkarten/GravityPlanet.png';
import './App.css';

function App() {
  return (
    <>
      {/* Vollbild-Hintergrundbild */}
      <div className="fullscreen-bg"></div>
      
      {/* 3D-Szene mit Avatar und rotierenden Karten */}
      <div className="rotating-cards">
        <div className='card-orbit'>
          {/* Avatar mit Wrapper für Gegen-Rotation */}
          <div className="avatar-wrapper">
            <img src={avatarImage} alt="Mein Avatar" className='avatar-center'></img>
          </div>
          <div className="card-item card-1"><img src={karte1} alt="Karte1" /></div>
          <div className="card-item card-2"><img src={karte2} alt="Karte2" /></div>
          <div className="card-item card-3"><img src={karte3} alt="Karte3" /></div>
        </div>
      </div>

      {/* Navigation */}
      <NavigationBar />

      {/* Hauptbereich */}
      <Container className="mt-4">

      </Container>
    </>
  );
}

export default App;