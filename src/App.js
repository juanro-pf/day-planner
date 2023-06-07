function App() {

  const activities = [
    { time: "5:00", description: "Despertarse - Comer algo - Hacer maleta" },
    { time: "5:30", description: "Tender la cama - Ir al gym" },
    { time: "6:00", description: "Gym" },
    { time: "6:30", description: "Gym" },
    { time: "7:00", description: "Gym y vapor" },
    { time: "7:30", description: "Bañarse y arreglarse" },
    { time: "8:00", description: "Regreso a casa" },
    { time: "8:30", description: "Desayunar" },
    { time: "9:00", description: "Trabajar" },
    { time: "9:30", description: "Trabajar - Tomar break (5 -10 min)" },
    { time: "10:00", description: "Trabajar" },
    { time: "10:30", description: "Trabajar - Tomar break (5 -10 min)" },
    { time: "11:00", description: "Siesta" },
    { time: "11:30", description: "Estirar (20 min) - Comer algo (10 min)" },
    { time: "12:00", description: "Trabajar" },
    { time: "12:30", description: "Trabajar - Tomar break (5 -10 min)" },
    { time: "13:00", description: "Trabajar" },
    { time: "13:30", description: "Trabajar - Tomar break (5 -10 min)" },
    { time: "14:00", description: "Trabajar" },
    { time: "14:30", description: "Estirar (10 min) - Comer (20 min)" },
    { time: "15:00", description: "Trabajar" },
    { time: "15:30", description: "Trabajar - Tomar break (5 -10 min)" },
    { time: "16:00", description: "Trabajar" },
    { time: "16:30", description: "Trabajar - Tomar break (5 -10 min)" },
    { time: "17:00", description: "Siesta" },
    { time: "17:30", description: "Piano" },
    { time: "18:00", description: "Pendientes (rolas - cocinar - lavar - pendientes varios)" },
    { time: "18:30", description: "Pendientes (rolas - cocinar - lavar - pendientes varios)" },
    { time: "19:00", description: "Pendientes (rolas - cocinar - lavar - pendientes varios)" },
    { time: "19:30", description: "Pendientes (rolas - cocinar - lavar - pendientes varios)" },
    { time: "20:00", description: "Siesta" },
    { time: "20:30", description: "Estirar" },
    { time: "21:00", description: "Lectura" },
    { time: "21:30", description: "Lectura" },
    { time: "22:00", description: "Entretenimiento - Fumar - Cenar" },
    { time: "22:30", description: "Preparar todo para estar dormido a las 11" },
    { time: "23:00", description: "Dormir" }
  ];

  return (
    <div className="planner-container">
      {
        activities.map(({ time, description}) => [
          <span className="period">
            <p className="time">{ time }</p>
            <p className="description">{ description }</p>
          </span>,
          <hr />
        ])
      }
    </div>
  );
}

export default App;
