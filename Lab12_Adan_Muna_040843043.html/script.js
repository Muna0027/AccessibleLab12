document.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key); 

    const carouselElement = document.getElementById('carouselExampleIndicators');

    if (!carouselElement) {
        console.log('Carousel not found'); 
        return;
    }
    const carouselInstance = new bootstrap.Carousel(carouselElement);

    if (event.key === 'ArrowRight') {
        carouselInstance.next();
    }
    else if (event.key === 'ArrowLeft') {
        carouselInstance.prev();
    }
});