document.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) {
        const revealTargets = document.querySelectorAll(
            'section > div:not([data-aos]), .glass:not([data-aos]), footer:not([data-aos])'
        );

        revealTargets.forEach((element, index) => {
            element.dataset.aos = 'fade-up';
            element.dataset.aosDelay = String((index % 4) * 70);
        });

        AOS.init({
            once: true,
            duration: 650,
            offset: 80
        });
    }
});
