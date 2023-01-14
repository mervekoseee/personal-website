import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Ben <span className="purple">Merve Miraç Köse. </span>
            
            <br />Kocaeli Üniversitesi Bilişim Sistemleri Mühendisliği, Anadolu Üniversitesi Yönetim Bilişim Sistemleri öğrencisiyim.
            <br />
            <br />
            Çalışma Deneyimlerim:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> LOTEC - Frontend Developer 
            </li>
            <li className="about-activity">
              <ImPointRight /> TatMetal - IT Intern
            </li>
            <li className="about-activity">
              <ImPointRight /> LOTEC - IT Intern
            </li>
            <li className="about-activity">
              <ImPointRight /> Beliz Real Estate - Sales Assistant/Translator
            </li>
          </ul>
          <br/>
          <p  style={{ textAlign: "justify" }} >
            Çalışma hayatım dışında bulunduğum sosyal aktiviteler:
          </p>
          <footer style={{ color: "rgb(155 126 172)" , textAlign: "justify"}}>
            - European Solidarity Corps - Gönüllü Sosyal Hizmet
            <br/>
            - Kocaeli Sharks Bayrak Futbolu - Oyuncu/Yönetim Kurulu Üyeliği
            <br/>
            - Aiesec - Üyelik
          </footer>
          <br/>
          <p  style={{ textAlign: "justify" }} >
            Kurslarım:
          </p>
          <footer style={{ color: "rgb(155 126 172)" , textAlign: "justify"}}>
            - Kocaeli Büyükşehir Belediyesi - Fransızca Kursu
            <br/>
            - Kocaeli Büyükşehir Belediyesi - İngilizce Kursu
            <br/>
            - Kocaeli Büyükşehir Belediyesi - Rusça Kursu
            <br/>
            - Google Dijital Atölye - Dijital Pazarlamanın Temelleri
            <br/>
            - İstanbul İşletme Enstitüsü - Almanca Kursu
            <br/>
            - İstanbul İşletme Enstitüsü - Korece Kursu
            <br/>
            - İstanbul İşletme Enstitüsü - Python Eğitimi
            <br/>
            - İstanbul İşletme Enstitüsü - C# Eğitimi
            <br/>
            - İstanbul İşletme Enstitüsü - Dijital Pazarlama Uzmanlığı
            <br/>
            - İstanbul İşletme Enstitüsü - Güçlü Marka Oluşturma Stratejileri
            <br/>
            - Bilgi Teknolojileri Kurumu - Algoritma ve Veri Yapıları İleri Seviye
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
