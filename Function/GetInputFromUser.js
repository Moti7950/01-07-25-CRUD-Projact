import readline from 'node:readline';

export function ask(question, cb) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(question, (answer) => {
    cb(answer);      // שלח את הקלט לפונקציית callback
    rl.close();      // סגור את הממשק אחרי שהמשתמש ענה
  });
}