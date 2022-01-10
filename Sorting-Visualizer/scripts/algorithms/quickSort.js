export async function quickSort() {
    
    //This delay and if-statements set the speed at which the algorithm will run.
    let delay = 80;

    if(isLowSpeed) {
        delay = 170;
    }
    else if(isMediumSpeed) {
        delay = 50;
    }
    else if(isHighSpeed) {
        delay = 18;
    }
    else if(isOriginalSpeed) {
        delay = 0;
    }
    
    let valueToBeChanged;
    let stack = [];
    let end;
    let start;
    
    stack.push(0);
    stack.push(array.length - 1);
    
    while(stack[stack.length - 1] >= 0){
        
    	end = stack.pop();
        start = stack.pop();

        let pivotIndex = start;
        const pivotValue = array[end];

        for (let i = start; i < end; i++) {
            if (array[i] < pivotValue) {
                await waitThisTime(delay);
                
                // Swapping elements
                [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];

                valueToBeChanged = document.getElementById("[td:" + pivotIndex + "]");
                valueToBeChanged.style.height = array[pivotIndex] + "px";
                valueToBeChanged.classList.add("sorting");
                valueToBeChanged = document.getElementById("[td:" + i + "]");
                valueToBeChanged.style.height = array[i] + "px";
                valueToBeChanged.classList.add("sorting");

                // Moving to next element
                pivotIndex++;
            }
        }
        await waitThisTime(delay);
        
        // Putting the pivot value in the middle
        [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

        valueToBeChanged = document.getElementById("[td:" + pivotIndex + "]");
        valueToBeChanged.style.height = array[pivotIndex] + "px";
        valueToBeChanged.classList.add("sorting");
        valueToBeChanged = document.getElementById("[td:" + end + "]");
        valueToBeChanged.style.height = array[end] + "px";
        valueToBeChanged.classList.add("sorting");
        
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }

    }
    console.log(array);

    //Little delay to make this more appealing.
    await waitThisTime(600);
    
    //Playing with colors. Some UX? or UI? idk.
    /*for (let k = 0; k < arrayLength; k++) {
        await waitThisTime(8);
        valueToBeChanged = document.getElementById("[td:" + k + "]");
        valueToBeChanged.classList.remove("sorting");
        valueToBeChanged.classList.add("sorted");
    }
    for (let i = 0; i < arrayLength; i++) {
        await waitThisTime(7);
        valueToBeChanged = document.getElementById("[td:" + i + "]");
        valueToBeChanged.classList.remove("sorted");
    }*/
    
    for (let i = 0; i < arrayLength; i++) {
        await waitThisTime(7);
        valueToBeChanged = document.getElementById("[td:" + i + "]");
        
        addColor(valueToBeChanged, "sorted5", 40);
        removeColor(valueToBeChanged, "sorting", 80);

        addColor(valueToBeChanged, "sorted6", 80);
        removeColor(valueToBeChanged, "sorted5", 80);

        addColor(valueToBeChanged, "sorted7", 120);
        removeColor(valueToBeChanged, "sorted6", 120);

        addColor(valueToBeChanged, "sorted4", 160);
        removeColor(valueToBeChanged, "sorted7", 160);

        addColor(valueToBeChanged, "sorted3", 200);
        removeColor(valueToBeChanged, "sorted4", 200);
        removeColor(valueToBeChanged, "sorting", 200);

        addColor(valueToBeChanged, "sorted2", 240);
        removeColor(valueToBeChanged, "sorted3", 240);
        
        addColor(valueToBeChanged, "sorted1", 280);
        removeColor(valueToBeChanged, "sorted2", 280);

        removeColor(valueToBeChanged, "sorted1", 320);
    }

    async function addColor(element, color, delay) {
        await waitThisTime(delay);
        element.classList.add(color);
    }
    async function removeColor(element, color, delay) {
        await waitThisTime(delay);
        element.classList.remove(color);
    }

    function waitThisTime(ms) {
        return new Promise (resolve => {
            setTimeout(() => { resolve('') }, ms);
        })
    }
}

/* The QuickSort algorithm without visualization and delay (more readable):

function partition(arr, start, end){

    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

    return pivotIndex;
}

function quickSortIterative() {

    stack = [];
    
    stack.push(0);
    stack.push(array.length - 1);
    
    while(stack[stack.length - 1] >= 0){
        
    	end = stack.pop();
        start = stack.pop();
        
        pivotIndex = partition(array, start, end);

        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}
*/