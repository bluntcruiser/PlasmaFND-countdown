const countDownDate = new Date("July 17, 2025 17:00:00").getTime();

const elements = {
  days: {el: document.getElementById('days')},
  hours: {el: document.getElementById('hours')},
  minutes: {el: document.getElementById('minutes')},
  seconds: {el: document.getElementById('seconds')}
};
const countdownEl = document.getElementById('countdown');
const subtitleEl  = document.querySelector('h2');

function updateCountdown() {
  const now      = Date.now();
  const distance = countDownDate - now;

  if (distance > 0) {
    const days    = Math.floor(distance / (1000*60*60*24));
    const hours   = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    Object.entries({days, hours, minutes, seconds}).forEach(([key, val]) => {
      const span = elements[key].el;
      const str  = String(val).padStart(2, '0');
      if (span.innerText !== str) {
        span.innerText = str;
        span.classList.add('pulse');
        setTimeout(() => span.classList.remove('pulse'), 600);
      }
    });
  } else {
    clearInterval(interval);
    subtitleEl.style.display = 'none';
    countdownEl.innerHTML = '<h2 class="sale-live">THE SALE IS LIVE!</h2>';
  }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();