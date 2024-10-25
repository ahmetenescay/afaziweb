import React from 'react';

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    // Kayıt işlemleri burada yapılacak
  };

  return (
    <div>
      <h1>Üye Ol</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="name">İsim:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Şifre:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Üye Ol</button>
      </form>
    </div>
  );
};

export default Signup;

