const { exec } = require('child_process');

// Запуск бекенду
const backendProcess = exec('npm run dev', { cwd: 'C:/Git/jet_back' }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка запуску бекенду: ${error}`);
  }
  console.log(`Бекенд: ${stdout}`);
  console.error(`Помилки бекенду: ${stderr}`);
});

// Запуск фронтенду
const frontendProcess = exec('npm start', { cwd: 'C:/Git/jet_back/frontreact' }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка запуску фронтенду: ${error}`);
  }
  console.log(`Фронтенд: ${stdout}`);
  console.error(`Помилки фронтенду: ${stderr}`);
});