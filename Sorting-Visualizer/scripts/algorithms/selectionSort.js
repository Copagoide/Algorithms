export async function selectionSort() {

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

    let valueToBeChanged1 = document.getElementById("[td:" + 0 + "]");
    let valueToBeChanged2 = document.getElementById("[td:" + 1 + "]");
    let valueThroughoutTheArray = document.getElementById("[td:" + 0 + "]");
    let index = 0;
    let temp = 0;
    let min = 0;

    for (let i = 0; i < arrayLength; i++) {
        
        min = array[i]
        for (let j = i; j < arrayLength; j++) {
            valueThroughoutTheArray = document.getElementById("[td:" + j + "]");
            valueThroughoutTheArray.classList.add("sorting");

            if (array[j] < min) {
                min = array[j];
                index = j;
            }
            
            await waitThisTime(delay);
            valueThroughoutTheArray.classList.remove("sorting")
        }

        if (min < array[i]) {
            temp = array[i];
            array[i] = min;
            array[index] = temp;
        }

        await waitThisTime(delay);
        valueToBeChanged1 = document.getElementById("[td:" + i + "]");
        valueToBeChanged1.style.height = array[i] + "px";
        valueToBeChanged2 = document.getElementById("[td:" + index + "]");
        valueToBeChanged2.style.height = array[index] + "px";
    }

    //Little delay to make this more appealing.
    setTimeout(() => {}, 1000)
    
    //Playing with colors. Some UX? or UI? idk.
    /*for (let i = 0; i < arrayLength; i++) {
        await waitThisTime(8);
        valueToBeChanged1 = document.getElementById("[td:" + i + "]");
        valueToBeChanged1.classList.add("sorted");
    }
    for (let k = 0; k < arrayLength; k++) {
        await waitThisTime(7);
        valueToBeChanged1 = document.getElementById("[td:" + k + "]");
        valueToBeChanged1.classList.remove("sorted");
    }*/
    
    for (let i = 0; i < arrayLength; i++) {
        await waitThisTime(7);
        valueToBeChanged1 = document.getElementById("[td:" + i + "]");
        
        addColor(valueToBeChanged1, "sorted1", 40);

        addColor(valueToBeChanged1, "sorted2", 80);
        removeColor(valueToBeChanged1, "sorted1", 80);

        addColor(valueToBeChanged1, "sorted3", 120);
        removeColor(valueToBeChanged1, "sorted2", 120);

        addColor(valueToBeChanged1, "sorted4", 160);
        removeColor(valueToBeChanged1, "sorted3", 160);

        addColor(valueToBeChanged1, "sorted3", 200);
        removeColor(valueToBeChanged1, "sorted4", 200);

        addColor(valueToBeChanged1, "sorted2", 240);
        removeColor(valueToBeChanged1, "sorted3", 240);
        
        addColor(valueToBeChanged1, "sorted1", 280);
        removeColor(valueToBeChanged1, "sorted2", 280);

        removeColor(valueToBeChanged1, "sorted1", 320);
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