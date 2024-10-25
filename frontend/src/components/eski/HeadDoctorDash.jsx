import React, { useState } from 'react';
import '../assets/HeadDoctorDash.css'; // CSS dosyasını ekliyoruz

const HeadDoctorDash = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({
    email: '',
    password: '',
    name: '',
    specialty: '',
    hospital: ''
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();
    setDoctors([...doctors, newDoctor]);
    setNewDoctor({
      email: '',
      password: '',
      name: '',
      specialty: '',
      hospital: ''
    });
  };

  const handleRemoveDoctor = (email) => {
    setDoctors(doctors.filter(doctor => doctor.email !== email));
  };

  const handleUpdateDoctor = (email) => {
    const updatedDoctor = prompt('Yeni doktor bilgilerini girin (isim, uzmanlık, hastane):', 'İsim, Uzmanlık, Hastane');
    if (updatedDoctor) {
      const [name, specialty, hospital] = updatedDoctor.split(', ');
      setDoctors(doctors.map(doctor => (
        doctor.email === email ? { ...doctor, name, specialty, hospital } : doctor
      )));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Burada e-mail ve şifre ile ilgili giriş işlemleri yapılabilir
    console.log("E-mail:", email);
    console.log("Password:", password);
    // Örnek olarak burada sadece konsola e-mail ve şifreyi yazdırıyoruz
    // Gerçek uygulamada bu bilgilerle bir sunucuya istek gönderilir ve kullanıcı doğrulanır
    setLoggedIn(true); // Giriş başarılı olduğunda loggedIn durumunu true yap
  };

  return (
    <div className="head-doctor-dashboard">
      {!loggedIn && ( // loggedIn false ise, yani giriş yapılmamışsa, giriş formunu göster
        <div className="login">
          <h2>Giriş Yap</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Giriş Yap</button>
          </form>
        </div>
      )}
      {loggedIn && ( // loggedIn true ise, yani giriş yapılmışsa, doktor ekleme formunu göster
        <div className="add-doctor">
          <h2>Doktor Ekle</h2>
          <form onSubmit={handleAddDoctor}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={newDoctor.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Şifre"
              value={newDoctor.password}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="İsim"
              value={newDoctor.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="specialty"
              placeholder="Uzmanlık"
              value={newDoctor.specialty}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="hospital"
              placeholder="Hastane"
              value={newDoctor.hospital}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Doktor Ekle</button>
          </form>
        </div>
      )}
      {loggedIn && ( // loggedIn true ise, yani giriş yapılmışsa, doktor listesini göster
        <div className="doctor-list">
          <h2>Doktorlar</h2>
          <ul>
            {doctors.map(doctor => (
              <li key={doctor.email}>
                <span>{doctor.email} - {doctor.password} - {doctor.name} - {doctor.specialty} - {doctor.hospital}</span>
                <button onClick={() => handleRemoveDoctor(doctor.email)}>Sil</button>
                <button onClick={() => handleUpdateDoctor(doctor.email)}>Güncelle</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeadDoctorDash;
