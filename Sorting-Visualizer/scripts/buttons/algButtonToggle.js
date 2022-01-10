const algButton = document.querySelector('#algButton');
const algList = document.querySelector('.algList');
let algListOpen = false;

algButton.addEventListener('click', () => {
    if (speedListOpen == true) {
        speedList.classList.toggle('openSpeedList');
        speedListOpen = false;
    }
    algList.classList.toggle('openAlgList');

    if (algListOpen == true) {
        algListOpen = false;
    }
    else if (algListOpen == false) {
        algListOpen = true;
    }
});