document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    let scale = carousel.getAttribute('scale') || 1;
    //为所有的.carousel-item img 设置max-height和max-width为scale
    const img = carousel.querySelectorAll('.carousel-item img');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const carouselItems = carousel.querySelectorAll('.carousel-item');//得到所有的图片
    const totalItems = carouselItems.length;
    let currentIndex = 0;
    let timerId = null;

    function goToIndex(index) {
        if (index < 0) {
            index = totalItems - 1;
        } else if (index >= totalItems) {
            index = 0;
        }
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    function goToNext() {
        goToIndex(currentIndex + 1);
        if (timerId !== null) {
            clearInterval(timerId);
        }
        timerId = setInterval(goToNext, 3000);
    }

    function goToPrev() {
        goToIndex(currentIndex - 1);
        if (timerId !== null) {
            clearInterval(timerId);
        }
        timerId = setInterval(goToNext, 3000);
    }

    img.forEach(item => {
        item.style.maxWidth = scale + '%';
        item.style.maxHeight = scale + '%';
    });
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);
    timerId = setInterval(goToNext, 3000);
});
