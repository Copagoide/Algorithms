const selectionSortAlg = document.querySelector('#algListSelectionSort');
const insertionSort = document.querySelector('#algListInsertionSort');
const bubbleSort = document.querySelector('#algListBubbleSort');
const shakerSort = document.querySelector('#algListShakerSort');
const mergeSort = document.querySelector('#algListMergesort');
const quickSort = document.querySelector('#algListQuicksort');
document.querySelector('#algSelected').innerHTML = ("Alg: Selection Sort");
document.querySelector('#funFact').innerHTML = ("Fun Fact: Selection Sort has a time complexity of O(n*n) and it is not a stable algorithm. ");
document.querySelector('#funFact').innerHTML += ("This means that it takes on average an amount of time equal to the size of the array squared, ");
document.querySelector('#funFact').innerHTML += ("and that the algorithm may unorder some previously ordered elements in the process.");

var isSelectionSortAlg = true;
var isInsertionSort = false;
var isBubbleSort = false;
var isShakerSort = false;
var isMergeSort = false;
var isQuickSort = false;

selectionSortAlg.addEventListener('click', () => {
    isInsertionSort = false;
    isBubbleSort = false;
    isShakerSort = false;
    isMergeSort = false;
    isQuickSort = false;
    isSelectionSortAlg = true;
    document.querySelector('#algSelected').innerHTML = ("Alg: Selection Sort");
    document.querySelector('#funFact').innerHTML = ("Fun Fact: Selection Sort has a time complexity of O(n*n) and it is not a stable algorithm. ");
    document.querySelector('#funFact').innerHTML += ("This means that it takes on average an amount of time equal to the size of the array squared, ");
    document.querySelector('#funFact').innerHTML += ("and that the algorithm may unorder some previously ordered elements in the process.");
});

insertionSort.addEventListener('click', () => {
    isSelectionSortAlg = false;
    isBubbleSort = false;
    isShakerSort = false;
    isMergeSort = false;
    isQuickSort = false;
    isInsertionSort = true;
    document.querySelector('#algSelected').innerHTML = ("Alg: Insertion Sort");
    document.querySelector('#funFact').innerHTML = ("Fun Fact: Insertion Sort has a time complexity of O(n*n) and it is a stable algorithm. ");
    document.querySelector('#funFact').innerHTML += ("This means that it takes on average an amount of time equal to the size of the array squared, ");
    document.querySelector('#funFact').innerHTML += ("and that the algorithm mantains the order of previously ordered elements based on a second characteristic.");
});

bubbleSort.addEventListener('click', () => {
    isSelectionSortAlg = false;
    isInsertionSort = false;
    isShakerSort = false;
    isMergeSort = false;
    isQuickSort = false;
    isBubbleSort = true;
    document.querySelector('#algSelected').innerHTML = ("Alg: Bubble Sort");
    document.querySelector('#funFact').innerHTML = ("Fun Fact: Bubble Sort has a time complexity of O(n*n) and it is a stable algorithm. ");
    document.querySelector('#funFact').innerHTML += ("This means that it takes on average an amount of time equal to the size of the array squared, ");
    document.querySelector('#funFact').innerHTML += ("and that the algorithm mantains the order of previously ordered elements based on a second characteristic.");
});

shakerSort.addEventListener('click', () => {
    isSelectionSortAlg = false;
    isInsertionSort = false;
    isBubbleSort = false;
    isMergeSort = false;
    isQuickSort = false;
    isShakerSort = true;
    document.querySelector('#algSelected').innerHTML = ("Alg: Shaker Sort");
    document.querySelector('#funFact').innerHTML = ("Fun Fact: Shaker Sort has a time complexity of O(n*n) and it is a stable algorithm. ");
    document.querySelector('#funFact').innerHTML += ("This means that it takes on average an amount of time equal to the size of the array squared, ");
    document.querySelector('#funFact').innerHTML += ("and that the algorithm mantains the order of previously ordered elements based on a second characteristic.");
});

mergeSort.addEventListener('click', () => {
    isSelectionSortAlg = false;
    isInsertionSort = false;
    isBubbleSort = false;
    isShakerSort = false;
    isQuickSort = false;
    isMergeSort = true;
    document.querySelector('#algSelected').innerHTML = ("Alg: Mergesort");
    document.querySelector('#funFact').innerHTML = ("Fun Fact: Mergesort has a time complexity of O(n*log(n)) and it is a stable algorithm. ");
    document.querySelector('#funFact').innerHTML += ("This means that it takes on average an amount of time equal to the size of the array times the logarithm of the size of the array, ");
    document.querySelector('#funFact').innerHTML += ("and that the algorithm mantains the order of previously ordered elements based on a second characteristic.");
});

quickSort.addEventListener('click', () => {
    isSelectionSortAlg = false;
    isInsertionSort = false;
    isBubbleSort = false;
    isShakerSort = false;
    isMergeSort = false;
    isQuickSort = true;
    document.querySelector('#algSelected').innerHTML = ("Alg: QuickSort");
    document.querySelector('#funFact').innerHTML = ("Fun Fact: QuickSort has a time complexity of O(n*log(n)) and it is not a stable algorithm. ");
    document.querySelector('#funFact').innerHTML += ("This means that it takes on average an amount of time equal to the size of the array times the logarithm of the size of the array, ");
    document.querySelector('#funFact').innerHTML += ("and that the algorithm may unorder some previously ordered elements in the process.");
});
