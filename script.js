let index = 0;
const track = document.getElementById("carousel-img-article");
const totalImages = document.querySelectorAll(".carousel-img-article img").length;

function scrollCarousel() {
    index = (index + 1) % totalImages;
    track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(scrollCarousel, 100);