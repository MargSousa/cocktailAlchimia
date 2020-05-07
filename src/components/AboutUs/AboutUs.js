import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function AboutUs() {
  return (
    <>
      <Header />
      <div className="title-section">
        <div>
          <Link to="/">
            <div className="arrow-button" />
          </Link>
        </div>
        <h1 className="searchtitle"> About Us </h1>
      </div>
      <CardColumns
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <Card style={{ width: '15rem' }} className="member-card">
          <Card.Img
            className="img-team"
            src="https://i.imgur.com/rVd8ZQ9.jpg"
            variant="top"
          />
          <Card.Title className="team-member">Isadora Hillebrand</Card.Title>
          <Button
            className="linkedin-button"
            variant="primary"
            href="https://www.linkedin.com/in/isadora-hillebrand-bb9489b8/"
            target="_blank"
            size="sm"
          >
            LinkedIn
          </Button>
        </Card>

        <Card style={{ width: '15rem' }} className="member-card">
          <Card.Img
            className="img-team"
            src="https://i.imgur.com/C5RPSxg.jpg"
            variant="top"
          />
          <Card.Title className="team-member">Fernanda Abbud</Card.Title>
          <Button
            className="linkedin-button"
            variant="primary"
            href="https://www.linkedin.com/in/fernandaabbud/"
            target="_blank"
            size="sm"
          >
            LinkedIn
          </Button>
        </Card>

        <Card style={{ width: '15rem' }} className="member-card">
          <Card.Img
            className="img-team"
            src="https://i.imgur.com/nmsiS56.jpg"
            variant="top"
          />
          <Card.Title className="team-member">Roxy Pursey</Card.Title>
          <Button
            className="linkedin-button"
            variant="primary"
            href="https://www.linkedin.com/in/roxy-pursey-337161114/"
            target="_blank"
            size="sm"
          >
            LinkedIn
          </Button>
        </Card>
        <Card style={{ width: '15rem' }} className="member-card">
          <Card.Img
            className="img-team"
            src="https://i.imgur.com/lZq4o8e.jpg"
            variant="top"
          />
          <Card.Title className="team-member">Margarida Sousa</Card.Title>
          <Button
            className="linkedin-button"
            variant="primary"
            href="https://www.linkedin.com/in/margarida-sousa-59323342/"
            target="_blank"
            size="sm"
          >
            LinkedIn
          </Button>
        </Card>
      </CardColumns>
      <Footer />
    </>
  );
}

export default AboutUs;
