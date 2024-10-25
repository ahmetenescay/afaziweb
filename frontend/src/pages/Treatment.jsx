import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import TreatmentMap from '../components/TreatmentMap';
import afaziImage from '../assets/2.png';  // Import edilen resim

const Treatment = () => {
  const { theme } = useContext(ThemeContext);

  const contentStyle = {
    background: theme.background,
    color: theme.textColor,
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const textContentStyle = {
    width: '60%',
  };

  const imageStyle = {
    width: '35%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    marginTop: '-20px', // Yukarıdan boşluk bırakır
  };

  return (
    <>
      <div style={contentStyle}>
        <div style={textContentStyle}>
          <h1><strong>Genel Müdahale Planı</strong></h1>
          <p>
            Acil Yardım Çağırma: Eğer afazi belirtileri aniden ortaya çıkmışsa (örneğin, aniden konuşamama, konuşulanları anlayamama), bu durum inme (felç) gibi acil bir tıbbi durumun işareti olabilir. Hemen 112'yi arayarak acil yardım çağırılmalıdır.
            Hastaneye Gitme: Kişi en kısa sürede bir sağlık kuruluşuna götürülmelidir. Özellikle inme gibi durumlarda zaman çok önemlidir.

          </p>

          <h2><strong>Afazi Tedavi Yöntemleri</strong></h2>
          <h3>Konuşma Terapisi</h3>
          <p>
            <strong>Konuşma terapisi</strong>, afazi hastaları için en yaygın
            tedavi yöntemidir. Bu terapi, hastaların konuşma ve dil becerilerini
            yeniden kazanmasına yardımcı olur.
          </p>

          <h3>İlaç Tedavisi</h3>
          <p>
            Afazi tedavisinde bazı ilaçlar kullanılabilir. Bu ilaçlar, beynin
            iyileşme sürecini hızlandırabilir ve dil becerilerinin geri
            kazanılmasına yardımcı olabilir.
          </p>

          <h3>Alternatif İletişim Yöntemleri</h3>
          <p>
            Afazi hastaları için alternatif iletişim yöntemleri de mevcuttur.
            Bu yöntemler, işaret dili, yazılı iletişim ve teknolojik
            cihazların kullanımını içerebilir.
          </p>

          <h3>Aile ve Sosyal Destek</h3>
          <p>
            Afazi hastalarının tedavisinde aile ve sosyal destek büyük önem
            taşır. Hastaların moral ve motivasyonlarını yüksek tutmak, tedavi
            sürecini olumlu yönde etkileyebilir.
          </p>

          <h3>Grup Terapisi</h3>
          <p>
            <strong>Grup terapisi</strong> seansları, afazi hastalarının sosyal
            etkileşimde bulunmalarına ve birbirlerinden destek almalarına imkan tanır.
            Bu terapiler, hastaların kendilerini yalnız hissetmemelerini ve
            benzer zorluklar yaşayan kişilerle bağ kurmalarını sağlar.
          </p>

          <h3>Teknolojik Destek ve Uygulamalar</h3>
          <p>
            Günümüzde birçok uygulama ve teknoloji, afazi hastalarının iletişim
            becerilerini geliştirmelerine yardımcı olmaktadır. Örneğin, konuşma
            tanıma yazılımları ve özel mobil uygulamalar, tedavi sürecini
            destekleyebilir.
          </p>

          <h3>Psikolojik Destek</h3>
          <p>
            Afazi hastalarının psikolojik durumu, tedavi sürecinde büyük rol
            oynar. Profesyonel psikolojik destek, hastaların duygusal olarak
            daha güçlü hissetmelerine ve tedaviye daha iyi yanıt vermelerine
            yardımcı olabilir.
          </p>

          <h3>Fiziksel Terapi</h3>
          <p>
            Afazi, genellikle diğer fiziksel rahatsızlıklarla birlikte ortaya çıkar.
            Fiziksel terapi, hastaların genel sağlık durumlarını iyileştirerek,
            konuşma terapisine ve diğer tedavilere daha iyi yanıt vermelerini sağlar.
          </p>

          <p><strong>Afazi tedavi yöntemleri hakkında daha fazla bilgi edinmek için
            uzmanlarla iletişime geçebilir ve farklı tedavi seçeneklerini
            değerlendirebilirsiniz.</strong><br />

            <br /><h2><strong>TEDAVİ MERKEZLERİ</strong></h2>
          </p>

        </div>
        <img
          src={afaziImage}
          alt="Afazi Tedavi"
          style={imageStyle}
        />
      </div>
      <div style={{ padding: '5px' }}>
        <TreatmentMap />
      </div>
    </>
  );
};

export default Treatment;