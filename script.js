// Auto Hero Banner Slider
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto change slide every 4 seconds
setInterval(nextSlide, 4000);

// Buy Now redirect to checkout page with item parameters
function buyNow(itemName, itemPrice) {
    window.location.href = `checkout.php?item=${encodeURIComponent(itemName)}&price=${encodeURIComponent(itemPrice)}`;
}