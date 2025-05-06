const updateResponsiveAttributes = () => {
  const cards = {
    distribution: {
      equals: Array.from(document.getElementsByClassName('distribution-equals-responsive')),
      largeContent: Array.from(document.getElementsByClassName('distribution-large-content-responsive'))	,
      largeImage: Array.from(document.getElementsByClassName('distribution-large-image-responsive')),
      none: Array.from(document.getElementsByClassName('distribution-none-responsive'))
    },
    orientation: {
      vertical: Array.from(document.getElementsByClassName('orientation-vertical-responsive')),
      horizontal: Array.from(document.getElementsByClassName('orientation-horizontal-responsive'))
    },
    content: {
      noCategory: Array.from(document.getElementsByClassName('no-category-responsive')),
      noSubtitle: Array.from(document.getElementsByClassName('no-subtitle-responsive'))
    }
  }

  if (window.innerWidth < 768) {
    cards.distribution.largeContent.forEach(card => card.setAttribute('distribution', 'equals'));
    cards.distribution.largeImage.forEach(card => card.setAttribute('distribution', 'large-content'));
    cards.distribution.none.forEach(card => card.setAttribute('distribution', 'none'));
    cards.distribution.equals.forEach(card => card.setAttribute('distribution', 'equals'));

    cards.orientation.horizontal.forEach(card => card.setAttribute('orientation', 'horizontal'));
    cards.orientation.vertical.forEach(card => card.setAttribute('orientation', 'vertical'));
  
    cards.content.noCategory.forEach(card => card.setAttribute('category', ''));
    cards.content.noSubtitle.forEach(card => card.setAttribute('subtitle', ''));
  }
};

const getDeviceByWidth = () => {
  const innerWidth = window.innerWidth;
  if (innerWidth < 768) {
    return 'mobile';
  }
  return 'desktop';
}