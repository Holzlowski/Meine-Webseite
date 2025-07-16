import React from 'react';
import { Container } from 'react-bootstrap';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <section className="content-section">
      <Container className="mt-4">
        <div className="content-wrapper">
          <h2>Willkommen auf meiner Website</h2>
          <p>Hier kommt Ihr Inhalt...</p>

          <div className="content-card">
            <h3>Über mich</h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>

          <div className="content-card">
            <h3>Meine Projekte</h3>
            <p>Weitere Inhalte...</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContentSection;
