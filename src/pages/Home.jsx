import React, { useEffect } from 'react';
import useAuth from '../logic/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Inicio';
  }, []);

  const firstHanlder = () => {
    navigate('/auth/register');
  };

  /* Renderizado */
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!currentUser) {
    return (
      <div className="hero min-h-screen container mx-auto">
        <div className="hero-content text-center  border-neutral-content/5 border-2">
          <div className="max-w-lg flex flex-col">
            <h1 className="text-5xl font-bold">Organizate con Task Manager</h1>
            <p className="p-6">
              {' '}
              Organiza tus tareas y actividades mediante tableros. Puedes crear,
              editar y eliminar tareas, así como analizar tu productividad
              usando la pestaña de estadísticas. Para comenzar, por favor,
              regístrate.
            </p>
            <button className="btn btn-primary " onClick={firstHanlder}>
              COMENZAR
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen text-2xl">
      Bienvenid@, {currentUser ? currentUser.username : 'invitado'}
    </div>
  );
};

export default Home;
