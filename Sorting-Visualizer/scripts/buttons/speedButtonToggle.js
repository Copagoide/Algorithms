const speedButton = document.querySelector('#speedButton');
const speedList = document.querySelector('.speedList');
let speedListOpen = false;

speedButton.addEventListener('click', () => {
    if (algListOpen == true) {
        algList.classList.toggle('openAlgList');
        algListOpen = false;
    }
    speedList.classList.toggle('openSpeedList');
    
    if (speedListOpen == true) {
        speedListOpen = false;
    }
    else if (speedListOpen == false) {
        speedListOpen = true;
    }
});