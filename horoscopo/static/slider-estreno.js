let currentIndex = 0;

function slideCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const card = document.querySelector('.movie-card');
  const cardWidth = card.offsetWidth;
  const totalCards = document.querySelectorAll('.movie-card').length;
  const visibleCards = 4;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > totalCards - visibleCards) {
    currentIndex = totalCards - visibleCards;
  }

  const newTransform = -(currentIndex * cardWidth);
  track.style.transform = `translateX(${newTransform}px)`;
}
