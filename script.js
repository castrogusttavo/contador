function updateCounter() {
  const targetDate = new Date('2024-07-04T00:00:00');
  const now = new Date();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
}

setInterval(updateCounter, 3600000); // Atualiza a cada hora
updateCounter(); // Atualiza ao carregar a página