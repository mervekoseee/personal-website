import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bulut from "../../Assets/Projects/film-dizi-onerilerimiz-43261-6110677431.jpg";
import urlShortener from "../../Assets/Projects/url-kısaltma-1.png";
import projetakip from "../../Assets/Projects/proje-ve-saha-yonetim-sistemi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          En Son <strong className="purple"> Çalışmalarım </strong>
        </h1>
        <p style={{ color: "white" }}>
          Üzerine çalıştığım birkaç projem:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlShortener}
              isBlog={false}
              title="URL Shortener"
              description="URL kısaltma, orijinal link uzunluğunu belirli araçlarla kısaltarak paylaşabilmenizi sağlıyor. Uzun bir link bağlantısını ortalama 15 karaktere kadar düşürerek kullanıcıya büyük kolaylık sunuyor. İlgili web sayfasına yönlendirme yaparak ek adres işlevi gören kısaltma işlemi, İngilizce de “link shorter” olarak adlandırılıyor."
              ghLink="https://github.com/mervekoseee/ShortUrlProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetakip}
              isBlog={false}
              title="Staj Takip Sistemi"
              description="Proje, Staj Takip Sistemleri, ekiplerin veya kişilerin iş yönetmesinde ve koordine etmesinde kullanılan araçlardır. Proje akışlarını dijital ortamda yönetme, yürütme ve denetleme imkanı sağlar, ortaya çıkabilecek hata payını azaltır. Kurumlar proje takip sistemlerini kullanarak iş akışını hızlandırır ve iş gücünden tasarruf sağlar. "
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bulut}
              isBlog={false}
              title="Film & Dizi Bankası"
              description="Film ve dizi içeriklerini barındıran web uygulaması filmler, diziler, televizyon programları, video oyunları ve internet içerikleri hakkında bilgiler barındıran çevrimiçi bir bilgi bankasıdır. Sinema ve televizyon yapımları hakkında oyuncu kadrosu, yapım ekibi, biyografiler, özetler, ilginç bilgiler, puanlar ve eleştiriler gibi bilgileri içerir."
              ghLink="https://github.com/mervekoseee/bulutproje/tree/master"
              demoLink="https://master.d34ymdpv9jnpdx.amplifyapp.com/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
