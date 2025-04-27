const thumbs = Array.from(document.querySelectorAll('.gallery-thumb'));
const mainImg = document.getElementById('mainGalleryImage');
let current = 3;

function setActive(idx) {
    thumbs.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
    });
    mainImg.src = thumbs[idx].src;
    current = idx;
}
thumbs.forEach((img, idx) => {
    img.addEventListener('click', () => setActive(idx));
});
document.getElementById('galleryPrevBtn').onclick = () => setActive((current - 1 + thumbs.length) % thumbs.length);
document.getElementById('galleryNextBtn').onclick = () => setActive((current + 1) % thumbs.length);
setActive(current);