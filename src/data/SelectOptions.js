export const StatusOptionsSprint = [
  {
    id: 0,
    value: 'Seleccione un estado',
    title: 'Seleccione un estado',
  },
  {
    id: 1,
    value: 'En proceso',
    title: 'En proceso',
  },
  {
    id: 2,
    value: 'Completo',
    title: 'Completo',
  },
  {
    id: 3,
    value: 'En espera',
    title: 'En espera',
  },
  {
    id: 4,
    value: 'Parado',
    title: 'Parado',
  },
];

export const StatusTaskOptions = [
  {
    id: 0,
    value: 'Seleccione un estado',
    title: 'Seleccione un estado',
  },
  {
    id: 1,
    value: 'En proceso',
    title: 'En proceso',
  },
  {
    id: 2,
    value: 'Completo',
    title: 'Completo',
  },
  {
    id: 3,
    value: 'En espera',
    title: 'En espera',
  },
  {
    id: 4,
    value: 'Parada',
    title: 'Parado',
  },
];

export const priorityOptionsSprint = [
  {
    id: 0,
    value: 'Seleccione una prioridad',
    title: 'Seleccione una prioridad',
  },
  {
    id: 1,
    value: 'Alta',
    title: 'Alta',
  },
  {
    id: 2,
    value: 'Media',
    title: 'Media',
  },
  {
    id: 3,
    value: 'Baja',
    title: 'Baja',
  },
];

/* Tablero de bienvenida */
export const welcomeSprint = {
  id: 0,
  title: 'Bienvenido',
  description:
    'Para comenzar, debe organizar su trabajo con tableros y tareas. ¿Porque no comienza creando un tablero?',
  responsable: 'Juan Perez',
  startDate: '01/01/2021',
  endDate: '01/01/2022',
  status: 'En progreso',
  priority: 'Alta',
};

export const welcomeTasks = [
  {
    id: 0,
    title: 'Crear tablero',
    description:
      'Paso 1: Crea un nuevo tablero. Haz clic en el botón " Tableros" en la parte inferior izquierda.',
    status: 'En progreso',
    isEditing: false,
    sprintId: 0,
  },
  {
    id: 1,
    title: 'Crear tarea',
    description:
      'Paso 2: Crea una nueva tarea. Haz clic en el botón " Tareas" en la parte inferior derecha.',
  },
  {
    id: 2,
    title: 'Asocia la tarea al tablero',
    description:
      'Selecciona el tablero que acabas de crear en el menú desplegable del tablero.',
  },
  {
    id: 3,
    title: '¡Listo!',
    description: '¡Ahora puedes comenzar a organizar tu trabajo!',
  },
];
