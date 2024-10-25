import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const socialMediaLinks = [
    { name: 'Twitter', url: 'https://twitter.com/', icon: faTwitter },
    { name: 'Facebook', url: 'https://facebook.com/', icon: faFacebook },
    // Diğer sosyal medya bağlantıları buraya eklenebilir
  ];

  const contactInfo = {
    email: 'ornek@afaziweb.com',
    phone: '+90 (123) 456 78 90',
    address: 'Örnek Adres, Şehir, Ülke',
    // Diğer iletişim bilgileri buraya eklenebilir
  };

  return (
    <footer style={{ background: theme.background, color: theme.color }}>
      <div>
        <h3>Sosyal Medya</h3>
        <div>
          {socialMediaLinks.map((link, index) => (
            <p key={index}>
              <a href={link.url} style={{ color: theme.linkColor }} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={link.icon} /> {link.name}
              </a>
            </p>
          ))}
        </div>
      </div>
      <div>
        <h3>İletişim Bilgileri</h3>
        <p><FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${contactInfo.email}`} style={{ color: theme.linkColor }}>{contactInfo.email}</a></p>
        <p><FontAwesomeIcon icon={faPhone} /> {contactInfo.phone}</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {contactInfo.address}</p>
      </div>
      <div>
        <p><strong>Daha fazlası için lütfen kayıt olun.</strong></p>
      </div>
      <p>© 2024 AfaziWeb. Tüm hakları saklıdır.</p>
    </footer>
  );
};

export default Footer;
