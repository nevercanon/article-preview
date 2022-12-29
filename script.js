const social = document.querySelector('.social');
const footer = document.querySelector('.footer');
const shareIcon = document.querySelector('.share-icon');
const shareContainer = document.querySelector('.icon-container');
const shareContainerActive = document.querySelector('.icon-container-active');

shareContainer.addEventListener('click', () => {
    social.classList.toggle('inactive');
})

shareContainerActive.addEventListener('click', () => {
    social.classList.toggle('inactive');
})