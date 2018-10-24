(function () {
    // Selectors
    const startBtn = document.querySelector('[data-start-btn]')
    const stopBtn = document.querySelector('[data-stop-btn]')
    const resetBtn = document.querySelector('[data-reset-btn]')
    const timer = document.querySelector('[data-timer]')
    const score = document.querySelector('[data-score]')
    const moles = document.querySelectorAll('[data-mole]')

    // Variables
    let scoreCounter = 0
    let timerId
    let timeLeft = 30;

    // Methods
    const startGame = () => {
        timerId = setInterval(countdown, 1000)
    }

    const stopGame = () => {
        clearInterval(timerId)
        scoreCounter = 0
    }

    const updateScore = (mole) => {
        mole.style = 'display: none;';
        scoreCounter++
        score.innerHTML = `Score ${scoreCounter}`
    }

    const resetGame = () => {
        clearInterval(timerId)
        scoreCounter = 0
        timeLeft = 30
        score.innerHTML = `Score ${scoreCounter}`
        timer.innerHTML = `${timeLeft} seconds remaining`;
    }

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            timer.innerHTML = 'Game Over';
        } else {
            let mole = moles[Math.floor(Math.random() * moles.length)];
            mole.classList.add('gameBoard__mole--moving');
            setTimeout(() => {
                mole.classList.remove('gameBoard__mole--moving');
            }, 1000)

            timer.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    // Event Listeners
    startBtn.addEventListener('click', startGame)
    stopBtn.addEventListener('click', stopGame)
    resetBtn.addEventListener('click', resetGame)
    for (var i = 0; i < moles.length; i++) {
        ((index) => {
            moles[index].addEventListener('click', () => updateScore(moles[index]))
        })(i);
    }
})()