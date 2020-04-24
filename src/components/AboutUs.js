import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardColumns } from 'react-bootstrap';
import './AboutUs.css';
import Isadora from '../img/isadora.jpg';
import Fernanda from '../img/fernanda.jpg';
import Margarida from '../img/margarida.jpg';
import Roxy from '../img/roxy.jpg';

function AboutUs() {
  return (
    <>
      <h1 className="about-us"> About Us </h1>
      <CardColumns
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <Card style={{ width: '15rem' }} className="member-card">
          <Card.Img className="img-team" src={Isadora} variant="top" />
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
          <Card.Img className="img-team" src={Fernanda} variant="top" />
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
          <Card.Img className="img-team" src={Roxy} variant="top" />
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
          <Card.Img className="img-team" src={Margarida} variant="top" />
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
    </>
  );
}

export default AboutUs;
