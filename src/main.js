//-------------------------------- HEADER ------------------------------//
const burgerButton = document.querySelector('.burger-button');
const closeButton = document.querySelector('.close-button');
const siteNavLinks = document.querySelectorAll('.site-nav-link');
const navList = document.querySelector('.site-nav__list');
const backdrop = document.querySelector('.backdrop');
const sideMenu = document.querySelector('.side-menu');

burgerButton.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
  sideMenu.classList.remove('is-hidden');
  document.body.classList.add('prevent-scroll');
});

closeButton.addEventListener('click', () => closeMobileMenu());

backdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  backdrop.classList.add('is-hidden');
  sideMenu.classList.add('is-hidden');
  document.body.classList.remove('prevent-scroll');
}

function handleScreenWidthChange() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1280) {
    burgerButton.classList.remove('is-hidden');
    closeButton.classList.remove('is-hidden');
    backdrop.classList.add('is-hidden');
    sideMenu.classList.add('is-hidden');
  }

  if (screenWidth >= 1280) {
    burgerButton.classList.add('is-hidden');
    closeButton.classList.add('is-hidden');
    backdrop.classList.remove('is-hidden');
    sideMenu.classList.remove('is-hidden');
  }

  siteNavLinks.forEach(siteNavLink => {
    siteNavLink.removeEventListener('click', closeMobileMenu);
    if (screenWidth < 1280) {
      siteNavLink.addEventListener('click', closeMobileMenu);
    }
  });
}

handleScreenWidthChange();

window.addEventListener('resize', handleScreenWidthChange);

// ****************************************************************************//

//-------------------------------- Privacy Policy ------------------------------//
const infoBtns = document.querySelectorAll('#info-open-btn');
const infoBackdrop = document.getElementById('info-backdrop');
const infoCloseBtn = document.getElementById('info-close-btn');

infoBtns.forEach(infoBtn => {
  infoBtn.addEventListener('click', () => {
    openInfoModal();
  });
});

infoCloseBtn.addEventListener('click', () => {
  closeInfoModal();
});

infoBackdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeInfoModal();
  }
});

function openInfoModal() {
  infoBackdrop.classList.remove('is-hidden');
  document.body.classList.add('prevent-scroll');
  window.addEventListener('keydown', onEscKeyPressInfo);
}

function closeInfoModal() {
  infoBackdrop.classList.add('is-hidden');
  document.body.classList.remove('prevent-scroll');
  window.removeEventListener('keydown', onEscKeyPressInfo);
}

function onEscKeyPressInfo(e) {
  if (e.code === 'Escape') {
    closeInfoModal();
  }
}

// ****************************************************************************//

//-------------------------------- Terms of Service ------------------------------//

const termsBtn = document.getElementById('terms-open-btn');
const termsBackdrop = document.getElementById('terms-backdrop');
const termsCloseBtn = document.getElementById('terms-close-btn');

termsBtn.addEventListener('click', () => {
  openTermsModal();
});

termsCloseBtn.addEventListener('click', () => {
  closeTermsModal();
});

termsBackdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeTermsModal();
  }
});

function openTermsModal() {
  termsBackdrop.classList.remove('is-hidden');
  document.body.classList.add('prevent-scroll');
  window.addEventListener('keydown', onEscKeyPressTerms);
}

function closeTermsModal() {
  termsBackdrop.classList.add('is-hidden');
  document.body.classList.remove('prevent-scroll');
  window.removeEventListener('keydown', onEscKeyPressTerms);
}

function onEscKeyPressTerms(e) {
  if (e.code === 'Escape') {
    closeTermsModal();
  }
}

// ****************************************************************************//

//-------------------------------- Loader ------------------------------//

document.addEventListener('DOMContentLoaded', () => {
  const mask = document.querySelector('.mask');
  const loader = document.querySelector('.loader');
  const errorPage = document.querySelector('.page-error-container');

  if (navigator.onLine) {
    mask.style.display = 'none';
    errorPage.style.display = 'none';
  } else {
    mask.style.display = 'none';
    errorPage.style.display = 'block';
    errorPage.style.position = 'fixed';
    errorPage.style.zIndex = '9999999';
    errorPage.style.top = '50%';
    errorPage.style.left = '50%';
    errorPage.style.transform = 'translate(-50%, -50%)';
  }

  window.addEventListener('online', () => {
    mask.style.display = 'none';
    errorPage.style.display = 'none';
  });

  window.addEventListener('offline', () => {
    mask.style.display = 'block';
    loader.style.display = 'none';
    errorPage.style.display = 'block';
    errorPage.style.position = 'fixed';
    errorPage.style.zIndex = '999999999999';
    errorPage.style.top = '50%';
    errorPage.style.left = '50%';
    errorPage.style.transform = 'translate(-50%, -50%)';
  });
});

// ****************************************************************************//

//-------------------------------- Scroll-To-Top ------------------------------//

const toTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    toTopBtn.classList.remove('is-hidden');
  } else {
    toTopBtn.classList.add('is-hidden');
  }
});

// ****************************************************************************//

//-------------------------------- Animation ------------------------------//

const headlines = document.querySelectorAll('.section-headline');
const descriptions = document.querySelectorAll('.section-description');
const blocks = document.querySelectorAll('#animation-block');
const elements = document.querySelectorAll('#animation');

const headlineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-headline');
    }
  });
});

const descriptionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-description');
    }
  });
});

const contentObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-content');
    }
  });
});

const blockObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-block');
    }
  });
});

headlines.forEach(headline => headlineObserver.observe(headline));
descriptions.forEach(description => descriptionObserver.observe(description));
blocks.forEach(block => blockObserver.observe(block));
elements.forEach(element => contentObserver.observe(element));

// ****************************************************************************//

//-------------------------------- Darkmode ------------------------------//

const darkModeBtn = document.querySelector('.switcher-label');

const changeTextColor = document.querySelectorAll(
  '.section-description, .section-reviews-student-review, .text-main-teachers'
);
const changeBgColor = document.querySelectorAll(
  '.about-item, .application-input, .application-textarea, .lessons-list-item, .section-reviews-item'
);
const changeBgProposalCard = document.querySelector('.proposal-list-card');
const changeHeaderUnderline = document.querySelectorAll('.header-underline');
const changeOpacity = document.querySelectorAll('.lessons-item-details');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  changeBgProposalCard.classList.toggle('proposal-list-card-dark-mode');
  changeTextColor.forEach(item => item.classList.toggle('text-color-dark-mode'));
  changeBgColor.forEach(item => item.classList.toggle('bg-color-dark-mode'));
  changeHeaderUnderline.forEach(item => item.classList.toggle('header-underline-dark-mode'));
  changeOpacity.forEach(item => item.classList.toggle('lessons-item-details-dark-mode'));
});

// ****************************************************************************//
