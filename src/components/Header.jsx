import { useContext, useEffect, useState } from 'react';
import { Menu, Navbar } from 'react-daisyui';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SprintContext from '../context/SprintContext';
import useAuth from '../logic/hooks/useAuth';

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { sprints } = useContext(SprintContext);
  const [sprint, setSprint] = useState([]);
  const location = useLocation();
  const sprintId = location.pathname.split('/')[1];
  const [showNav, setShowNav] = useState(null);

  useEffect(() => {
    setShowNav(true);
    setTimeout(() => {
      setShowNav(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (sprints) {
      const sprintFound = sprints.find((sprint) => sprint.id === sprintId);

      setSprint(sprintFound);
    }
  }, [sprints, sprintId]);

  const [title, setTitle] = useState('TaskManager');

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/auth/login':
        setTitle('Iniciar Sesión');
        break;
      case '/auth/register':
        setTitle('Regristarse');
        break;
      default:
        setTitle(
          sprint && sprint.title ? sprint.title.toUpperCase() : 'TaskManager'
        );
    }
  }, [location, sprint]);

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'business'
  );

  const handleToggle = () => {
    setTheme(theme === 'business' ? 'black' : 'business');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  return (
    <>
      <div
        onMouseEnter={() => setShowNav(true)} // Mostrar el navbar cuando el mouse entra al contenedor
        onMouseLeave={() => setShowNav(false)}
        className=" fixed top-0 left-0 min-h-[130px]  w-full h-fit items-center flex flex-col z-[1000] "
      >
        <Navbar
          className={`flex bg-base-100/80  z-30 transition-all ease-in-out duration-600 ${showNav ? 'md:opacity-100' : 'md:opacity-0'} `}
        >
          <div className="flex-1 gap-5">
            <button
              onClick={() => navigate('/')}
              className="ml-4  btn btn-primary  normal-case text-xl"
            >
              {title}
            </button>
          </div>

          {/* responsable */}

          <div className="hidden md:flex flex-none mx-2">
            <Menu className="flex  items-center flex-row px-1 ">
              {!currentUser ? (
                <Menu.Item>
                  <Link to="/auth/login">Iniciar Sesión</Link>
                </Menu.Item>
              ) : (
                <div className="glass flex gap-4 mx-3 border-2 p-2 border-neutral-content/10">
                  <span className="label-text text-sm hover:cursor-pointer selection:bg-none">
                    Usuario: {currentUser.legajo}
                  </span>
                  <span className="label-text text-sm hover:cursor-pointer selection:bg-none">
                    Rol: {currentUser.role}
                  </span>
                </div>
              )}

              {currentUser && (
                <Menu.Item>
                  <details className="">
                    <summary>Panel de Control</summary>
                    <ul className="[border-width:var(--tab-border)] border-base-300 z-[1000]  menu bg-base-200 w-max rounded-box fixed">
                      {currentUser && currentUser.role === 'admin' && (
                        <li>
                          <Link className="p-3" to="/admin">
                            Panel de administración
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link className="p-3" to="/settings">
                          Configuración
                        </Link>
                      </li>
                      <li>
                        <button
                          className="p-3 hover:bg-error/80"
                          onClick={handleLogout}
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </details>
                </Menu.Item>
              )}
            </Menu>
          </div>
          {/* DRAWER */}
          {/* ThemeHanlder */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="hidden" onChange={handleToggle} />
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="flex-none px-4">
            <div className="drawer">
              <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col">
                <div className="flex-none md:hidden order-2">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 z-[1000] min-h-full bg-base-200">
                  {/* Sidebar content here */}
                  {!currentUser ? (
                    <Menu.Item>
                      <Link to="/auth/login">Iniciar Sesión</Link>
                    </Menu.Item>
                  ) : (
                    <div className="glass flex gap-4 mx-3 justify-evenly p-2 border-b-2 border-neutral-content/5 mb-5">
                      <span className="label-text text-sm hover:cursor-pointer selection:bg-none">
                        Usuario: {currentUser.legajo}
                      </span>
                      <span className="label-text text-sm hover:cursor-pointer selection:bg-none">
                        Rol: {currentUser.role}
                      </span>
                    </div>
                  )}
                  {currentUser && currentUser.role === 'admin' && (
                    <li>
                      <Link
                        to="/admin"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Panel de administración
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link to="/settings">Configuración</Link>
                  </li>
                  <li className="flex flex-col gap-2">
                    <button
                      onClick={() => logout() && navigate('/')}
                      className=" hover:bg-error/80"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
