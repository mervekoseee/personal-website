import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Das Projekt <span className="purple">Open Sports </span>
            ist ein Projekt der sozialen Verantwortung, das vom Sportverein 
            <span className="purple"> SVGO </span> geleitet wird. 
            <br />
            So fördert auch der Sportverein SV Grambke-Oslebshausen e.V. (SVGO) mit Angeboten den Zusammenhalt in der vielsprachigen, internationalen Nachbarschaft der Bremer Stadtteile Grambke und Oslebshausen.
            <br />
            <br/>
            <span className="purple"> Unser Sportangebot </span> 
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Türkische Tänze für Kinder 
            </li>
            <li className="about-activity">
              <ImPointRight /> Türkische Tänze für Frauen
            </li>
            <li className="about-activity">
              <ImPointRight /> Ballsportarten für Kinder
            </li>
            <li className="about-activity">
              <ImPointRight /> Ballsportarten für junge Menschen
            </li>
            <li className="about-activity">
              <ImPointRight /> Familientage für Kinder
            </li>
          </ul>
          <br/>
          <p  style={{ textAlign: "justify" }} >
          Kostenloser Vereinssport für die Nachbarschaft
          </p>
          <footer style={{ color: "rgb(155 126 172)" , textAlign: "justify"}}>
            Zunächst sind offene Angebote wie Tanzen, Handball, 
            Akrobatik und Fußball im Außenbereich angedacht, 
            später sollen auch Sporthallen genutzt werden.
            <br/>
            <br/>
          Wo sind wir?
         <br/>
          Die Sportangebote finden in der Sporthalle Auf den Heuen statt.
            <br/>
            <br/>
            <MapContainer
      center={[53.134445331287026, 8.730191471544641]}
      zoom={15}
      style={{ height: '400px', width: '100%' }
    }
    scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <Marker position={[53.134445331287026, 8.730191471544641]}>
      <Popup>
      Wir sind hier!
    </Popup>
      </Marker>
    </MapContainer>
    
          </footer>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
