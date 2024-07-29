document.addEventListener('DOMContentLoaded', () => {
    let estatura = document.querySelectorAll('.estatura');
    let selector = document.getElementById('selector');

    estatura.forEach(button => {
        button.addEventListener('click', () => {
            let colorClass = button.classList[1];
            selector.className = `selector ${colorClass}`;
            document.body.style.backgroundColor = window.getComputedStyle(button).backgroundColor;
        });
    });
});
