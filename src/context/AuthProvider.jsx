import { createContext, useState, useEffect } from 'react';
import UserService from '../models/UserService';

// creando el contexto
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : '';
  });
  const [loading, setLoading] = useState(null);

  // instancio useService
  const userService = new UserService();

  const dataFetch = async (legajo, password) => {
    try {
      const response = await fetch(
        'http://intranet.ituzaingo.dns/auth/api/v2/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            legajo: legajo,
            password: password,
          }),
        }
      );
      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }
      const data = await response.json();
      console.log(data);
      return data.body.result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // funcion para iniciar sesión
  const login = async (username, password) => {
    try {
      const user = await dataFetch(username, password); // Esperar la promesa
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user); // Actualizar el estado del contexto de autenticación
      console.log(user);
    } catch (error) {
      console.error(error);
      throw new Error('Error en la autenticación');
    }
  };

  // función para cerrar sesión
  function logout() {
    setCurrentUser('');
    localStorage.removeItem('currentUser');
  }

  // funcion para registrar un nuevo usuario

  function register(username, password, role) {
    const newUser = userService.createUser(username, password, role);
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setLoading(false);
  }

  // guarndando los funciones para las prop
  const value = {
    currentUser,
    login,
    logout,
    register,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
