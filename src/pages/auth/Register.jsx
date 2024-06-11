import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../logic/hooks/useAuth';
import UserService from '../../models/UserService';

const Register = () => {
  useEffect(() => {
    document.title = 'Register';
  }, []);
  const { register } = useAuth();
  const navigate = useNavigate();
  const userService = new UserService();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [styleAlert, setStyleAlert] = useState('success');
  const [alertmsj, setAlertMsj] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [role, setRole] = useState('user');

  /* Componente de alerta */
  const createAlert = (msg, style, src = null) => {
    setAlert(true);
    setStyleAlert(style || 'success');
    setAlertMsj(msg);
    setIsDisabled(true);

    setTimeout(() => {
      setAlert(false);
      if (src) {
        setTimeout(() => {
          navigate(src);
        }, 200); // Ajusta el tiempo si es necesario
      } else {
        setIsDisabled(false); // Habilitar el formulario nuevamente si no hay redirección
      }
    }, 2000); // Tiempo para mostrar la alerta
  };

  const handleRegister = (e) => {
    e.preventDefault();

    //////////////////
    // validaciones///
    //////////////////

    // si el usuario existe
    const existingUser = userService.findUserByUsername(username);

    if (existingUser) {
      createAlert('El usuario ya existe', 'error');
      return;
    }

    // si no hay usuario o contraseña
    if (!username || !password) {
      createAlert('Todos los campos son obligatorios', 'error');
      return;
    }
    // si hay espacios en blanco
    if (!username.trim() || !password.trim()) {
      createAlert(
        'Todos los campos son obligatorios y no pueden estar vacíos o ser solo espacios en blanco',
        'error'
      );
      return;
    }

    // llamo a la funcion register del contexto de auth
    if (password === 'admin123') {
      register(username, password, 'admin');
      setUsername('');
      setPassword('');
      setRole('user');
      /* Mensaje */
      createAlert(
        'Usuario administrador creado con éxito',
        'success',
        '/auth/login'
      );
      return;
    }
    register(username, password, role);
    // clear after register
    setUsername('');
    setPassword('');
    setRole('user');
    /* Cree un componente donde paso mis datos para la alerta, mensaje estilo de DAISY UI y ruta del hook navigate */
    /* Mensaje de creacion de usuario y redirección*/
    createAlert('Usuario creado con éxito', 'success', '/auth/login');
  };

  return (
    /* Div container */
    <>
      <div className="mx-auto container h-screen items-center flex flex-col justify-center">
        {/*  */}
        <div className="p-6 max-w-sm shadow-2xl rounded-ee-lg border-base-300/25 border-2 bg-neutral-content/10">
          {/* Div de titulo */}
          <div className="text-2xl text-center selection:bg-none hover:cursor-default pb-3">
            Registro
          </div>
          {/* Formulario */}
          <form onSubmit={handleRegister} className="flex flex-col gap-2">
            <label className="input input-bordered flex flex-row items-center gap-2  focus-within:outline-none ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              {/* INPUT USER */}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="grow input border-none  focus:ring-0 focus-visible:outline-none"
                placeholder="Nuevo Usuario"
                disabled={isDisabled}
              />
            </label>
            <label className="input  input-bordered flex flex-row items-center gap-2  focus-within:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              {/* INPUT PASSWORD */}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Cree una contraseña"
                className="grow input border-none focus:ring-0 focus-visible:outline-none"
                disabled={isDisabled}
              />
            </label>
            <div className="mt-2">
              <button
                disabled={isDisabled}
                type="submit"
                className="w-full btn btn-primary rounded"
              >
                Registrar Usuario{' '}
              </button>
            </div>
          </form>
          {/* termina label */}
          <div className="divider">o</div>
          <div className="flex flex-row gap-1 items-center justify-center">
            <span>¿Ya tenés una cuenta?</span>
            <span className="label-text link flex flex-col gap-1 justify-center items-center">
              <Link to="/auth/login"> Inicia Sesión</Link>
            </span>
          </div>
        </div>
      </div>
      {alert && (
        <div className="toast toast-end">
          <span className={`alert alert-${styleAlert}`}>{alertmsj}</span>
        </div>
      )}
    </>
  );
};

export default Register;
