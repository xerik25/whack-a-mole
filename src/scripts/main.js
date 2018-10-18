(function () {
    // Selectors
    const startBtn = document.querySelector('[data-start-btn]')
    const stopBtn = document.querySelector('[data-stop-btn]')
    const timer = document.querySelector('[data-timer]')
    const score = document.querySelector('[data-score]')
    const moles = document.querySelectorAll('[data-mole]')

    // Variables
    let scoreCounter = 0
    let timerId
    let timeLeft = 5;

    // Methods
    const startGame = () => {
        console.log('start')
        timerId = setInterval(countdown, 1000)
    }

    const stopGame = () => {
        clearInterval(timerId)
        scoreCounter = 0
    }

    const updateScore = (mole) => {
        mole.style = 'display: none;';
        scoreCounter++
        score.innerHTML = scoreCounter
    }

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            timer.innerHTML = 'Game Over';
        } else {
            let mole = moles[Math.floor(Math.random() * moles.length)];
            mole.style = 'transform: translate(0px, 37%);';
            setTimeout(() => {
                mole.style = 'transform: translate(0px, 77%);';
            }, 1000)

            console.log('timeLeft', timeLeft)
            timer.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    // Event Listeners
    startBtn.addEventListener('click', startGame)
    stopBtn.addEventListener('click', stopGame)
    for (var i = 0; i < moles.length; i++) {
        ((index) => {
            moles[index].addEventListener('click', () => updateScore(moles[index]))
        })(i);
    }
})()