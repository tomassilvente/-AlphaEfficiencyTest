
document.addEventListener("DOMContentLoaded", function() {
    // Hamburuger Menu
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerMenu.addEventListener('click', function() {
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    });

    // Question's answer

    const questions = document.querySelectorAll('.questions li');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answerDiv = this.querySelector('.answer');
            if (answerDiv.style.display === 'block') {
                answerDiv.style.display = 'none';
            } else {
                const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
                answerDiv.innerHTML = `<p>${loremIpsum}</p>`;
                answerDiv.style.display = 'block';
            }
        });
    });

    // Big countdown

    const countdownDate = new Date('2024-07-05T23:59:59').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = formatTime(days);
        document.getElementById('hours').innerHTML = formatTime(hours);
        document.getElementById('minutes').innerHTML = formatTime(minutes);
        document.getElementById('seconds').innerHTML = formatTime(seconds);

        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
        }
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    const countdownTimer = setInterval(updateCountdown, 1000);
});