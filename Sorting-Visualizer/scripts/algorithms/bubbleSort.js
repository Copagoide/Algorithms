export async function bubbleSort(){

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
        delay = 5;
    }

    let valueToBeChanged1;
    let valueToBeChanged2;
    let arrayCurrent = 0;
    let shouldContinue;
    //CHECK THE POSITION OF SETTIMEOUT WITHIN THE IF STATEMENT

    do {
        shouldContinue = false;

        for (let j = 1; j < arrayLength; j++) {

            if (array[j] < array[(j - 1)]) {
                await waitThisTime(delay);
                shouldContinue = true;
                arrayCurrent = array[j];
                array[j] = array[(j - 1)];
                array[(j - 1)] = arrayCurrent;

                valueToBeChanged1 = document.getElementById("[td:" + j + "]");
                valueToBeChanged1.style.height = array[j] + "px";
                valueToBeChanged1.classList.add("sorting");
                valueToBeChanged2 = document.getElementById("[td:" + (j - 1) + "]");
                valueToBeChanged2.style.height = array[(j - 1)] + "px";
                valueToBeChanged2.classList.add("sorting");
            
                setTimeout(() => {
                    valueToBeChanged1.classList.remove("sorting");
                    valueToBeChanged2.classList.remove("sorting");
                }, (delay - 5));
            }
        }
    } while (shouldContinue == true)

    //Little delay to make this more appealing.
    await waitThisTime(600);
    
    //Playing with colors. Some UX? or UI? idk.
    /*for (let k = 0; k < arrayLength; k++) {
        await waitThisTime(8);
        valueToBeChanged1 = document.getElementById("[td:" + k + "]");
        valueToBeChanged1.classList.add("sorted");
    }
    for (let i = 0; i < arrayLength; i++) {
        await waitThisTime(7);
        valueToBeChanged1 = document.getElementById("[td:" + i + "]");
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