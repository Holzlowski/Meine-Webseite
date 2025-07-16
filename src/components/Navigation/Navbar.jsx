import { Navbar, Nav, Container } from 'react-bootstrap';
import baumLogo from '../../assets/images/BaumLogo.png'; // Logo importieren
import logoName from '../../assets/images/LogoName.png'; // Optional: Logo-Name importieren

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">
                    <img 
                        src={logoName} 
                        alt="Baum Logo" 
                        style={{ width: '45px', height: 'auto', marginRight: '10px' }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;