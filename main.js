const menuIcon = document.getElementById("icon")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("list");
});

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const carousel = document.querySelector('.carousel');
const cards = carousel.querySelectorAll('.card-corousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function slideTo(slide) {
    cards.forEach((card, index) => {
        card.style.display = 'none';
        if (index === slide) {
            card.style.display = 'block';
        }
    });
    currentSlide = slide;
}

slideTo(0);

prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = cards.length - 1;
    }
    slideTo(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= cards.length) {
        currentSlide = 0;
    }
    slideTo(currentSlide);
});



