const countDownDate = new Date("July 17, 2025 00:00:00").getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownEl = document.getElementById('countdown');
const subtitleEl = document.querySelector('h2');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = String(days).padStart(2, '0');
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');
        secondsEl.innerText = String(seconds).padStart(2, '0');
    } else {
        clearInterval(interval);
        subtitleEl.style.display = 'none';
        countdownEl.innerHTML = '<h2 class="sale-live">THE SALE IS LIVE!</h2>';
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();