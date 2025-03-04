// src/components/HomePage.tsx
import React from 'react';
import './HomePage.css'; // Add custom styles
import { Button, Divider, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  if (auth.user) {
    navigate('/team-profile')
  }
  const scheduleMatches = () => {
    if (auth.user) {
      navigate('/team-profile')
      return
    }

    
  }

  return (
    <div>
    <header className="header">
      <div className="header-content">
        <img
          src="/logo2.png" // Replace with your logo's path
          alt="Logo"
          className="header-logo"
        />
        <h1 className="header-title">Agende seus jogos</h1>
        <p className="header-description">Cadastre seu time e marque amistosos direto com o proprietário do campo. Tenha a agenda do seu time em um só lugar e permita que outros times marquem jogos com você.</p>
        <Divider style={{ borderColor: '#DDD', marginBottom: 0 }}/>
      </div>
    </header>
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center'}}>
    <Flex gap="middle" vertical style={{ width: '100%', maxWidth: '700px', margin: '15px'}}>
          <Button type="primary" size='large' onClick={() => navigate('phone-verification')}>Marcar jogos</Button>
          <Button type="primary" size='large'>Cadastrar time</Button>
          <Button type="primary" size='large'>Cadastrar campo</Button>
      </Flex>
    </div>
    </div>
  );
};

export default HomePage;
