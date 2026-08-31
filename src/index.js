import readlineSync from 'readline-sync';
import cli from './cli.js';

const roundsCount = 3;

const runGame = (gameDescription, getRoundData) => {
  const PLAYER = cli();

  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getRoundData();

    console.log(`Pregunta: ${question}`);

    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}'Incorrecto! :( La respuesta correcta era '${correctAnswer}'.`,
      );

      console.log(`¡Intentémoslo de nuevo, ${PLAYER}!`);

      return;
    }

    console.log('Correcto!');
  }

  console.log(`¡Felicidades, ${PLAYER}!`);
};

export default runGame;