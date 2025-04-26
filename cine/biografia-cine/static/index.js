function toggleYear(element) {
    const parent = element.parentElement;
    const contentBody = parent.querySelector('.filmografia-mobile-content-body');
    const toggleBtn = element.querySelector('.filmografia-mobile-toggle-btn');

    if (parent.classList.contains('open')) {
        parent.classList.remove('open');
        toggleBtn.textContent = '+';
        contentBody.style.height = '0px';
    } else {
        parent.classList.add('open');
        toggleBtn.textContent = '-';
        contentBody.style.height = contentBody.scrollHeight + 'px';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('elenco-slider');
    const prevBtn = document.getElementById('elenco-prev');
    const nextBtn = document.getElementById('elenco-next');
    const cards = slider.children;
    const visible = 5; 
    let current = 0;

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth -30; 
        slider.style.transform = `translateX(-${current * cardWidth}px)`;
    }

    prevBtn.addEventListener('click', function () {
        if (current > 0) {
            current--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', function () {
        if (current < cards.length - visible) {
            current++;
            updateSlider();
        }
    });

    window.addEventListener('resize', updateSlider);
    updateSlider();
});