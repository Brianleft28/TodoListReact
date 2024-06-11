import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../models/UserService';
import useAuth from '../../logic/hooks/useAuth';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);
  const { login } = useAuth();
  const navigate = useNavigate();
  const userService = new UserService();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);
  const [styleAlert, setStyleAlert] = useState(null);
  const [alertmsj, setAlertmsj] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  // crear componente de alerta

  /* Componente de alerta */
  const createAlert = (msg, style, src = null) => {
    setAlert(true);
    setStyleAlert(style || 'success');
    setAlertmsj(msg);
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

  const handleLogin = (e) => {
    e.preventDefault();

    // Validaciones
    if (!username || !password) {
      createAlert('Todos los campos son obligatorios', 'error');
      return;
    }
    if (!username.trim() || !password.trim()) {
      createAlert('Todos los campos son obligatorios', 'error');
      return;
    }

    // autenticacion del usuario
    const user = userService.authenticateUser(username, password);
    if (!user) {
      createAlert(
        'Creedenciales invalidas, por favor, intente nuevamente',
        'error'
      );
      return;
    }

    // llamo a la función login del contexto de auth
    login(username, password);

    // limpio despues de logear
    setUsername('');
    setPassword('');

    // redirijo a la pagina de tareas

    createAlert('Bienvenido, ' + username, 'success', '/');
  };

  return (
    <div className="mx-auto container h-screen items-center flex flex-col justify-center">
      <div className="p-6 max-w-sm shadow-2xl rounded-ee-lg border-base-300/25 border-2 bg-neutral-content/10">
        <div className="text-2xl text-center selection:bg-none hover:cursor-default pb-3">
          Task Manager
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="grow input border-none  focus:ring-0 focus-visible:outline-none"
              placeholder="Usuario"
            />
          </label>
          <label className="input mb-3 input-bordered flex flex-row items-center gap-2  focus-within:outline-none">
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              className="grow input border-none focus:ring-0 focus-visible:outline-none"
            />
          </label>
          <div className="mt-2">
            <button className="w-full btn btn-primary rounded">
              Inicia Sesión{' '}
            </button>
          </div>
        </form>
        <div className="divider">o</div>
        <span className="label-text link flex flex-col gap-1 justify-center items-center">
          <Link to="/auth/register">Registrarme</Link>

          <Link to="/auth/forgotpswrd">Olvidé mi contraseña</Link>
        </span>
      </div>
      {alert && (
        <div className="toast toast-end">
          <span className={`alert alert-${styleAlert}`}>{alertmsj}</span>
        </div>
      )}
    </div>
  );
};

export default Login;
