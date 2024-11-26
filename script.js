// script.js

// Exemplo de interação: animação ao rolar sobre os elementos das seções
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.05)';
        section.style.transition = 'transform 0.3s ease-in-out';
    });
    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});
