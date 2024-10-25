import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel'; // Carousel bileşenini import ettik

const AfaziKart = ({ baslik, metin, genisletildi, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="afazi-kart"
      style={{
        background: 'transparent', // Arka plan rengini transparent olarak ayarla
        color: theme.textColor,
        width: 'calc(50% - 20px)', // Yatayda yarı genişlikte
        margin: '10px', // Aralarda 10 piksel boşluk
        cursor: 'pointer', // İmleci el işareti yap
        borderRadius: '10px', // Köşeleri yuvarla
        padding: '20px', // İçeriğin etrafında boşluk
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Hafif gölgelendirme
        border: `1px solid ${theme.borderColor}`, // Kenarlarda theme'den gelen renk
        textAlign: 'center', // İçeriği ortala
      }}
      onClick={onClick}
    >
      <h2>{baslik}</h2>
      <p>{genisletildi ? metin : `${metin.slice(0, 100)}...`}</p>
    </div>
  );
};

// Ana bileşen
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [genisletilenKart, setGenisletilenKart] = useState(null);

  const afaziKartlar = [
    {
      baslik: 'Afazi Nedir?',
      metin: 'Afazi, beyin hasarı veya hastalığı sonucunda konuşma yeteneğindeki bozukluklardır. Afazi, dil alanını etkileyen bir hastalıktır ve konuşma, anlama, okuma ve yazma becerilerini etkileyebilir...',
    },
    {
      baslik: 'Nedenleri',
      metin: 'Afazi, beyin hasarı veya hastalığı sonucunda konuşma yeteneğindeki bozukluklardır. Afazi, dil alanını etkileyen bir hastalıktır ve konuşma, anlama, okuma ve yazma becerilerini etkileyebilir...',
    },
    {
      baslik: 'Etkileri',
      metin: 'Afazi, beyin hasarı veya hastalığı sonucunda konuşma yeteneğindeki bozukluklardır. Afazi, dil alanını etkileyen bir hastalıktır ve konuşma, anlama, okuma ve yazma becerilerini etkileyebilir...',
    },
    {
      baslik: 'Afazinin Tarihçesi',
      metin: 'Afazi, beyin hasarı veya hastalığı sonucunda konuşma yeteneğindeki bozukluklardır. Afazi, dil alanını etkileyen bir hastalıktır ve konuşma, anlama, okuma ve yazma becerilerini etkileyebilir...',
    },
    {
      baslik: 'Tedavi ve Rehabilitasyon',
      metin: 'Afazi, beyin hasarı veya hastalığı sonucunda konuşma yeteneğindeki bozukluklardır. Afazi, dil alanını etkileyen bir hastalıktır ve konuşma, anlama, okuma ve yazma becerilerini etkileyebilir...',
    },
    {
      baslik: 'Afazi nekadar yaygın?',
      metin: 'Afazi, beyin hasarı veya hastalığı sonucunda konuşma yeteneğindeki bozukluklardır. Afazi, dil alanını etkileyen bir hastalıktır ve konuşma, anlama, okuma ve yazma becerilerini etkileyebilir...',
    },
    {
      baslik: 'Afazi Belirtileri',
      metin: 'Afazi, beyin hasarı veya hastalığı sonucunda konuşma yeteneğindeki bozukluklardır. Afazi, dil alanını etkileyen bir hastalıktır ve konuşma, anlama, okuma ve yazma becerilerini etkileyebilir...',
    },
  ];

  return (
    <div style={{ background: theme.background, color: theme.textColor, minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>AFAZİ WEB SİTESİNE HOŞ GELDİNİZ</h1>

      {/* Carousel */}
      <div style={{ marginBottom: '50px', width: '100%' }}>
        <Carousel />
      </div>

      {/* Afazi Kartları */}
      <div className="afazi-kartlar" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {afaziKartlar.map((kart, index) => (
          <AfaziKart
            key={index}
            baslik={kart.baslik}
            metin={kart.metin}
            genisletildi={genisletilenKart === index}
            onClick={() => setGenisletilenKart(genisletilenKart === index ? null : index)}
          />
        ))}
      </div>

      {/* İçindekiler */}
      <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '22px' }}>
        <h2>İçindekiler</h2>
      </div>
      <ul style={{ textAlign: 'center', listStyleType: 'none', padding: 0 }}>
        <li><Link to="/">Afazi Nedir?</Link></li>
        <li><Link to="/">Nedenleri</Link></li>
        <li><Link to="/">Etkileri</Link></li>
        <li><Link to="/treatment">Tedavi ve Rehabilitasyon</Link></li>
        <li><Link to="/treatment">Destekleyici Çevre ve İyileşme</Link></li>
        <li><Link to="/treatment">Afazi ve İyileşme</Link></li>
        <li><Link to="/afazi-info">Etiyolojisi</Link></li>
        <li><Link to="/afazi-info">Eşlik Eden Hastalıklar</Link></li>
        <li><Link to="/afazi-info">Afazi Türleri</Link></li>
        <li><Link to="/afazi-info">Türlerin Ayırıcı Tanıları</Link></li>
        <li><Link to="/afazi-info">Doğru Bilinen Yanlışlar</Link></li>
        <li><Link to="/afazi-info">Afazi Belirtileri</Link></li>
        <li><Link to="/treatment">Genel Müdahale Planı</Link></li>
        <li><Link to="/treatment">Afazi Tedavi Yöntemleri</Link></li>
        <li><Link to="/treatment">Afazi Tedavisi Uygulanan Yerler ve Harita Gösterimleri</Link></li>
        <li><Link to="/resources">Güncel Araştırmalar ve Akademik Yazılar</Link></li>
        <li><Link to="/">Afazinin Tarihçesi</Link></li>
      </ul>
    </div>
  );
};

export default Home;
