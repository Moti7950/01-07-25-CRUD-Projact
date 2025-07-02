import readline from 'node:readline';

export function ask(question, cb) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(question, (answer) => {
    cb(answer);
    rl.close();
  });
}