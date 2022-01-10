export async function mergeSort() {

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

    let iterations = 0;
    let leftSide = [];
    let rightSide = [];
    let index = 0;
    let n = 1;
    let a = 0;
    let b = 0;
    let subArrayLength = 1;
    let valueToBeChanged;

    //While-loop to get the number of iterations for the MergeSort algorithm.
    do {
        n *= 2;
        iterations++;
    } while (n < arrayLength)
    
    //MergeSort algorith:
    for (let i = 1; i < (iterations + 1); i++) {
        
        //Reseting the indices.
        b = 0;      
        index = 0;

        //For-loop that follows a geometrical progression of 2:
        for (let j = 0; j < array.length; j += 2 * i) {

            for (a = 0; a < subArrayLength; a++, b++) {
                leftSide[a] = array[b];
            }
            for (a = 0; a < subArrayLength; a++, b++) {
                rightSide[a] = array[b];
            }
            
            while (leftSide.length && rightSide.length && leftSide[0] != undefined && rightSide[0] != undefined) {
                await waitThisTime(delay);
                if(leftSide[0] <= rightSide[0]) {
                    valueToBeChanged = document.getElementById("[td:" + index + "]");
                    valueToBeChanged.style.height = leftSide[0] + "px";
                    valueToBeChanged.classList.add("sorting");

                    array[index] = leftSide.shift();
                }
                else {
                    valueToBeChanged = document.getElementById("[td:" + index + "]");
                    valueToBeChanged.style.height = rightSide[0] + "px";
                    valueToBeChanged.classList.add("sorting");

                    array[index] = rightSide.shift();
                }
                index++;
            }
            
            while (leftSide.length && leftSide[0] != undefined) {
                await waitThisTime(delay);
                valueToBeChanged = document.getElementById("[td:" + index + "]");
                valueToBeChanged.style.height = leftSide[0] + "px";
                valueToBeChanged.classList.add("sorting");

                array[index] = leftSide.shift();
                index++;
            }
            
            while (rightSide.length && rightSide[0] != undefined) {
                await waitThisTime(delay);
                valueToBeChanged = document.getElementById("[td:" + index + "]");
                valueToBeChanged.style.height = rightSide[0] + "px";
                valueToBeChanged.classList.add("sorting");

                array[index] = rightSide.shift();
                index++;
            }
        }
        subArrayLength *= 2;
    }console.log(array);

    //Little delay to make this more appealing.
    await waitThisTime(600);
    
    //Playing with colors. Some UX? or UI? idk.
    /*for (let k = 0; k < arrayLength; k++) {
        await waitThisTime(8);
        valueToBeChanged = document.getElementById("[td:" + k + "]");
        valueToBeChanged.classList.remove("sorting");
        //valueToBeChanged.classList.add("sorted");
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

/* Cleaner way to do MergeSort (without delay):

const mergeSort =  array => {
    if(array.length < 2) return array;

    const middle = Math.floor(array.length / 2);
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length); console.log(leftSide, rightSide)
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

const merge =  (left, right) => {console.log('MERGE');console.log("LEFT:" + left);console.log("LEFT:" + right);
    const result = [];
    let valueToBeChanged;

    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            valueToBeChanged = document.getElementById("[td:" + result.length + "]");
            valueToBeChanged.style.height = left[0] + "px";
            valueToBeChanged.classList.add("sorting");
            console.log(valueToBeChanged);console.log(left[0][0]);console.log(left[0][1]);
            result.push(left.shift());
        }
        else {
            valueToBeChanged= document.getElementById("[td:" + result.length + "]");
            valueToBeChanged.style.height = right[0] + "px";
            valueToBeChanged.classList.add("sorting");
            result.push(right.shift());
        }
    }

    while(left.length) {
        valueToBeChanged = document.getElementById("[td:" + result.length + "]");
        valueToBeChanged.style.height = left[0] + "px";
        valueToBeChanged.classList.add("sorting");
        result.push(left.shift());
    }

    while(right.length) {
        valueToBeChanged= document.getElementById("[td:" + result.length + "]");
        valueToBeChanged.style.height = right[0] + "px";
        valueToBeChanged.classList.add("sorting");
        result.push(right.shift());
    }
    return result;
}
*/