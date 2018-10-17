(function () {
    // Selectors
    const startBtn = document.querySelector('[data-start-btn]')

    // Methods
    const startGame = () => {
        console.log('test')
    }

    // Event Listeners
    startBtn.addEventListener('click', startGame)
})();