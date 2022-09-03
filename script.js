const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

while (true) {
  const userAnswer = prompt('Введите целое цисло от 1 до 100. Для выхода введите "выход"');

  if (userAnswer.toLocaleLowerCase() === "выход") {
    break;
  }

  const userNumber = Number.parseInt(userAnswer, 10);
  if (Number.isNaN(userNumber)) {
    alert('Вы ввели не число');
    continue;
  }


  attempts++;
  if (userNumber > answer) {
    alert('Попробуйте звять число меньше');
  } else if (userNumber < answer) {
    alert('Попробуйте взять число больше');
  } else {
    alert('Верно! Число отгадано с ' + attempts + ' попытки!');
    break;
  }
}
