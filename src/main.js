// Main JS para PlayKids Cristão
console.log('PlayKids Cristão carregado com sucesso!');

// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Adicionar classe ativa ao scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            section.style.opacity = '1';
        }
    });
});

// Redirecionar botões para o link de compra
document.querySelectorAll('.cta-button, .main-cta-button, .final-cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
        // Substitua pela URL correta de compra
        window.location.href = 'https://hotmart.com/seu-link-aqui';
    });
});
