import readlineSync from 'readline-sync';

const cli = () => {
  console.log('¡Bienvenido a Brain Games!');

  const PLAYER = readlineSync.question('¿Cuál es tu nombre? ');

  console.log(`¡Hola, ${PLAYER}!`);

  return PLAYER;
};

export default cli;