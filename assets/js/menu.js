let button = document.querySelector('.hamburger');
let navigation = document.querySelector('.navigation-section');
function toggle() {
    this.classList.toggle('clicked');
    navigation.classList.toggle('clicked');
};

button.addEventListener('click', toggle);
