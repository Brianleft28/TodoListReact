import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="max-auto container h-screen items-center flex justify-center">
      <div className="p-6 rounded-ee-lg bg-gradient-to-t from-neutral-content/10 border-base-300 border-2 to-neutral-content/10">
        <div className="text-2xl text-center selection:bg-none hover:cursor-default pb-2">
          Inicia Sesión
        </div>
        <div className="flex flex-col gap-3">
          <label className="input input-bordered flex flex-row items-center gap-2  focus-within:outline-none ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow input border-none focus:ring-0 focus-visible:outline-none"
              placeholder="Usuario"
            />
          </label>
          <label className="input input-bordered flex flex-row items-center gap-2  focus-within:outline-none">
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
            <input
              type="password"
              placeholder="**********"
              className="grow input border-none focus:ring-0 focus-visible:outline-none"
            />
          </label>
          <div className="mt-2">
            <button className="w-full btn btn-primary rounded">
              Inicia Sesión
            </button>
          </div>
        </div>
        <div className="divider">o</div>
        <span className="label-text link flex flex-col gap-1 justify-center items-center">
          <a>¿Olvidaste tu contraseña?</a>
          <a>Registrarme</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
