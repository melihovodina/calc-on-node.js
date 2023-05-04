const { stdout, stdin, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-p', '-m', '-s', '-d'];
if (!allowedFlags.includes(flag)) {
  stdout.write('Попробуйте ещё раз запустить файл с флагом -p, -m, -s, -d');
  exit();
}
stdout.write('Введите, пожалуйста, два числа\n');
stdin.on('data', data => {
  let numStr = data.toString()
  let numStrArr = numStr.split(' ')
  const hasIncorrectLength = numStrArr.length !== 2;
  const hasIncorrectValues = numStrArr.some(numStr => Number.isNaN(+numStr));
    if (hasIncorrectLength || hasIncorrectValues) {
        stdout.write('Нужно ввести 2 числа, разделенных пробелом');
        exit();
    }
  let [firstNum, secondNum] = numStrArr.map(numStr => +numStr);
    switch(flag) {
      case '-p':
        let sum = firstNum + secondNum;
        stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
        break;
      case '-m':
        let mult = firstNum * secondNum;
        stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
        break;
      case '-s':
        let sub = firstNum - secondNum;
        stdout.write(`${firstNum} - ${secondNum} = ${sub}`);
        break;
      case '-d':
        let div = firstNum / secondNum;
        stdout.write(`${firstNum} / ${secondNum} = ${div}`);
        break;    
    }
    exit();
});