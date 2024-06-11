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

  // funcion para iniciar sesión
  function login(username, password) {
    const user = userService.findUserByUsername(username);
    if (user && user.password === password) {
      setCurrentUser(user);
      console.log('Usuario ' + username + ' ha iniciado sesión.');
      localStorage.setItem('currentUser', JSON.stringify(user));

      setLoading(false);
      return true;
    } else {
      console.log('Usuario o contraseña incorrectos.');
    }
    return false;
  }

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
