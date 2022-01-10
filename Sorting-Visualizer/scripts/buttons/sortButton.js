import { selectionSort } from "../algorithms/selectionSort.js";
import { insertionSort } from "../algorithms/insertionSort.js";
import { bubbleSort } from "../algorithms/bubbleSort.js";
import { shakerSort } from "../algorithms/shakerSort.js";
import { quickSort } from "../algorithms/quickSort.js";
import { mergeSort } from "../algorithms/mergeSort.js";

const sortButton = document.querySelector('#sortButton');
sortButton.addEventListener('click', () => {
    
    if(isSelectionSortAlg) {
        selectionSort();
    }
    else if(isInsertionSort) {
        insertionSort();
    }
    else if(isBubbleSort) {
        bubbleSort();
    }
    else if(isShakerSort) {
        shakerSort();
    }
    else if(isMergeSort) {
        mergeSort();
    }
    else if(isQuickSort) {
        quickSort();
    }
    else {     //Just in case there's a problem.
        selectionSort();
    }
    
});
