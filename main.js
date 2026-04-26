document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('draw-button');
    const wowButton = document.getElementById('wow-button');
    const numbersDisplay = document.getElementById('numbers-display');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme logic
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });

    // Wow button event listener
    wowButton.addEventListener('click', () => {
        alert('당첨입니다');
    });

    // Function to get the color for each ball based on the number
    const getBallColor = (number) => {
        if (number <= 10) return 'var(--yellow-ball)';
        if (number <= 20) return 'var(--blue-ball)';
        if (number <= 30) return 'var(--red-ball)';
        if (number <= 40) return 'var(--gray-ball)';
        return 'var(--green-ball)';
    };

    // Main function to handle the lotto draw
    const startDraw = () => {
        // 1. Clear previous numbers and disable the button
        numbersDisplay.innerHTML = '';
        drawButton.disabled = true;

        // 2. Generate 6 unique numbers
        const pickedNumbers = new Set();
        while (pickedNumbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            pickedNumbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(pickedNumbers).sort((a, b) => a - b);

        // 3. Draw numbers one by one with an animation effect
        let drawCount = 0;
        const interval = setInterval(() => {
            if (drawCount < sortedNumbers.length) {
                const number = sortedNumbers[drawCount];
                const ball = document.createElement('div');
                ball.classList.add('ball');
                ball.textContent = number;
                ball.style.backgroundColor = getBallColor(number);
                // Add animation delay for each ball
                ball.style.animationDelay = `${drawCount * 0.1}s`;
                numbersDisplay.appendChild(ball);
                drawCount++;
            } else {
                // 4. Stop the interval and re-enable the button
                clearInterval(interval);
                drawButton.disabled = false;
            }
        }, 600); // 600ms delay between each ball appearance
    };

    // Add event listener to the button
    drawButton.addEventListener('click', startDraw);
});
