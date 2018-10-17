(function () {
    // Selectors
    const startBtn = document.querySelector('[data-start-btn]')
    const timer = document.querySelector('[data-timer]')

    // Variables
    let score = 0

    // Methods
    const startGame = () => {
        let timeLeft = 30;
        let timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == 0) {
                clearTimeout(timerId);
                timer.innerHTML = 'Game Over';
            } else {
                timer.innerHTML = timeLeft + ' seconds remaining';
                timeLeft--;
            }
        }
    }

    // Event Listeners
    startBtn.addEventListener('click', startGame)
})()