const slider = document.querySelector('.ro1');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});


// const sliderB = document.querySelector('.ro2');
// let isDownB = false;
// let startXB;
// let scrollLeftB;

// sliderB.addEventListener('mousedown', (e) => {
//     isDownB = true;
//     sliderB.classList.add('active');
//     startXB = e.pageXB - sliderB.offsetLeft;
//     scrollLeftB = sliderB.scrollLeftB;
// });
// sliderB.addEventListener('mouseleave', () => {
//     isDownB = false;
//     sliderB.classList.remove('active');
// });
// sliderB.addEventListener('mouseup', () => {
//     isDownB = false;
//     sliderB.classList.remove('active');
// });
// sliderB.addEventListener('mousemove', (e) => {
//     if (!isDownB) return;
//     e.preventDefault();
//     const xB = e.pageXB - sliderB.offsetLeft;
//     const walkB = (xB - startX) * 2; //scroll-fast
//     sliderB.scrollLeftB = scrollLeftB - walkB;
//     console.log(walkB);
// });