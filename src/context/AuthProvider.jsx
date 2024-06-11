import { createContext, useState, useEffect } from 'react';
import UserService from '../models/UserService';

// creando el contexto
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(null);

  // instancio useService
  const userService = new UserService();

  // funcion para iniciar sesión
  function login(username, password) {
    const user = userService.findUserByUsername(username);
    if (user && user.password === password) {
      setCurrentUser(user);
      setLoading(false);
      return true;
    }
    return false;
  }

  // función para cerrar sesión
  function logout() {
    setCurrentUser(null);
  }

  // funcion para registrar un nuevo usuario

  function register(username, password, role) {
    const newUser = userService.createUser(username, password, role);
    setCurrentUser(newUser);
    console.log('Usuario ' + username + ' creado con éxito.' + newUser);
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
