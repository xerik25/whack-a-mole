(function () {
    // Selectors
    const startBtn = document.querySelector('[data-start-btn]')
    const timer = document.querySelector('[data-timer]')
    const moles = document.querySelectorAll('[data-mole]')

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
                let mole = moles[Math.floor(Math.random()*moles.length)];
                mole.style = 'transform: translate(0px, -67%);';
                setTimeout(() => {
                    mole.style = 'transform: translate(0px, -27%);';
                }, 1000)

                timer.innerHTML = timeLeft + ' seconds remaining';
                timeLeft--;
            }
        }
    }

    // Event Listeners
    startBtn.addEventListener('click', startGame)
})()