import React, { useEffect } from 'react';
import useAuth from '../logic/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import FirstTime from '../components/Home/FirstTime';
import AdminBoard from '../components/Home/AdminBoard';

const Home = () => {
  const { currentUser, loading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Inicio';
  }, []);

  const firstHanlder = () => {
    navigate('/auth/register');
  };

  if (currentUser.role === 'user') {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        no sos admin capo
      </div>
    );
  }

  /* Renderizado */
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Cargando...
      </div>
    );
  }

  if (!currentUser) {
    return <FirstTime firstHanlder={firstHanlder} />;
  }
  if (currentUser.role === 'admin') return <AdminBoard />;
};

export default Home;
