const lowSpeed = document.querySelector('#speedListLow');
const mediumSpeed = document.querySelector('#speedListMedium');
const highSpeed = document.querySelector('#speedListHigh');
const originalSpeed = document.querySelector('#speedListOriginal');
document.querySelector('#speedSelected').innerHTML = ("Speed: High");

var isLowSpeed = false;
var isMediumSpeed = false;
var isHighSpeed = true;
var isOriginalSpeed = false;

lowSpeed.addEventListener('click', () => {
    isMediumSpeed = false;
    isHighSpeed = false;
    isOriginalSpeed = false;
    isLowSpeed = true;
    document.querySelector('#speedSelected').innerHTML = ("Speed: Low");
});

mediumSpeed.addEventListener('click', () => {
    isLowSpeed = false;
    isHighSpeed = false;
    isOriginalSpeed = false;
    isMediumSpeed = true;
    document.querySelector('#speedSelected').innerHTML = ("Speed: Medium");
});

highSpeed.addEventListener('click', () => {
    isLowSpeed = false;
    isMediumSpeed = false;
    isOriginalSpeed = false;
    isHighSpeed = true;
    document.querySelector('#speedSelected').innerHTML = ("Speed: High");
});

originalSpeed.addEventListener('click', () => {
    isLowSpeed = false;
    isMediumSpeed = false;
    isHighSpeed = false;
    isOriginalSpeed = true;
    document.querySelector('#speedSelected').innerHTML = ("Speed: Original");
});