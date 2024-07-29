document.addEventListener('DOMContentLoaded', () => {
    const estatura = document.querySelectorAll('.estatura');
    const selector = document.getElementById('selector');

    estatura.forEach(button => {
        button.addEventListener('click', () => {
            const colorClass = button.classList[1];
            selector.className = `selector ${colorClass}`;
            document.body.style.backgroundColor = window.getComputedStyle(button).backgroundColor;
        });
    });
});
