const testimonios = [
  {
    nombre: 'Ana Martínez',
    rol: 'Directora de TI, Grupo Andino',
    texto: 'Migramos nuestra operación en semanas y sin interrupciones. El equipo fue claro y cumplió cada fecha.'
  },
  {
    nombre: 'Luis Ramírez',
    rol: 'Gerente de Operaciones, Logística Norte',
    texto: 'El soporte responde rápido y entiende el negocio, no solo la tecnología.'
  },
  {
    nombre: 'Carla Gómez',
    rol: 'Fundadora, Estudio Brote',
    texto: 'Pasamos de hojas de cálculo a un sistema real. Lo recomiendo sin dudarlo.'
  }
];

const testimoniosGrid = document.getElementById('testimonios-grid');

testimonios.forEach(({ nombre, rol, texto }) => {
  const card = document.createElement('div');
  card.className = 'card';

  const quote = document.createElement('p');
  quote.textContent = `“${texto}”`;

  const autor = document.createElement('h3');
  autor.textContent = nombre;

  const cargo = document.createElement('p');
  cargo.textContent = rol;

  card.append(quote, autor, cargo);
  testimoniosGrid.appendChild(card);
});
