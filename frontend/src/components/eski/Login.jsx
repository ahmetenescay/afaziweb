import React, { useState } from 'react';
import DoctorDash from './DoctorDash';
import PatientDash from './PatientDash';
import doctorImage from '../assets/1.png';
import patientImage from '../assets/1.png';

const DoctorLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Doktor giriş işlemleri burada yapılacak
    // Örnek olarak sadece konsola e-mail ve şifreyi yazdırıyoruz
    console.log("E-mail:", email);
    console.log("Password:", password);
    // Girişin başarılı olduğunu varsayıyoruz
    onLogin('doctor');
  };

  return (
    <div className="login-card">
      <img src={doctorImage} alt="Doctor" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
      <div className="login-content" style={{ minHeight: '200px' }}>
        <h2>Doktor Girişi</h2>
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
          <div style={{ marginBottom: '10px' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button type="submit">Giriş Yap</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PatientLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Hasta giriş işlemleri burada yapılacak
    // Örnek olarak sadece konsola e-mail ve şifreyi yazdırıyoruz
    console.log("E-mail:", email);
    console.log("Password:", password);
    // Girişin başarılı olduğunu varsayıyoruz
    onLogin('patient');
  };

  return (
    <div className="login-card">
      <img src={patientImage} alt="Patient" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
      <div className="login-content" style={{ minHeight: '200px' }}>
        <h2>Hasta Girişi</h2>
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
          <div style={{ marginBottom: '10px' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button type="submit">Giriş Yap</button>
            <button>Kayıt Ol</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const DashboardContainer = ({ userType }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {userType === 'doctor' && <DoctorDash />}
      {userType === 'patient' && <PatientDash />}
    </div>
  );
};

const Login = () => {
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setUserType(type);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
        {userType === null && (
          <>
            <DoctorLogin onLogin={handleLogin} />
            <PatientLogin onLogin={handleLogin} />
          </>
        )}
      </div>
      {userType !== null && (
        <DashboardContainer userType={userType} />
      )}
    </div>
  );
};

export default Login;
