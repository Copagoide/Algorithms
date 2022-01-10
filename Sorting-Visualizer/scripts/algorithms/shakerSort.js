export async function shakerSort(){

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

    let length = arrayLength;
    let valueToBeChanged1;
    let valueToBeChanged2;
    let arrayCurrent = 0;
    let shouldContinue;

    do {
        shouldContinue = false;

        for (let j = 1; j < length; j++) {

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

        for (let k = length; k > 0; k--) {

            if (array[k] < array[(k - 1)]) {
                await waitThisTime(delay);
                shouldContinue = true;
                arrayCurrent = array[k];
                array[k] = array[(k - 1)];
                array[(k - 1)] = arrayCurrent;

                valueToBeChanged1 = document.getElementById("[td:" + k + "]");
                valueToBeChanged1.style.height = array[k] + "px";
                valueToBeChanged1.classList.add("sorting");
                valueToBeChanged2 = document.getElementById("[td:" + (k - 1) + "]");
                valueToBeChanged2.style.height = array[(k - 1)] + "px";
                valueToBeChanged2.classList.add("sorting");
                
            setTimeout(() => {
                valueToBeChanged1.classList.remove("sorting");
                valueToBeChanged2.classList.remove("sorting");
            }, (delay - 5));
            }
        }
        length--;

    } while (shouldContinue == true)

    //Little delay to make this more appealing.
    await waitThisTime(450);
    
    //Playing with colors. Some UX? or UI? idk.
    for (let i = (parseInt(arrayLength / 2, 10)), j = i; i >= 0 ; i--, j++) {
        await waitThisTime(7);
        valueToBeChanged1 = document.getElementById("[td:" + i + "]");
        valueToBeChanged2 = document.getElementById("[td:" + j + "]");

        
        addColor(valueToBeChanged1, "sorted1", 40);
        addColor(valueToBeChanged2, "sorted1", 40);

        addColor(valueToBeChanged1, "sorted2", 80);
        addColor(valueToBeChanged2, "sorted2", 80);
        removeColor(valueToBeChanged1, "sorted1", 80);
        removeColor(valueToBeChanged2, "sorted1", 80);

        addColor(valueToBeChanged1, "sorted3", 120);
        addColor(valueToBeChanged2, "sorted3", 120);
        removeColor(valueToBeChanged1, "sorted2", 120);
        removeColor(valueToBeChanged2, "sorted2", 120);

        addColor(valueToBeChanged1, "sorted4", 160);
        addColor(valueToBeChanged2, "sorted4", 160);
        removeColor(valueToBeChanged1, "sorted3", 160);
        removeColor(valueToBeChanged2, "sorted3", 160);

        addColor(valueToBeChanged1, "sorted3", 200);
        addColor(valueToBeChanged2, "sorted3", 200);
        removeColor(valueToBeChanged1, "sorted4", 200);
        removeColor(valueToBeChanged2, "sorted4", 200);

        addColor(valueToBeChanged1, "sorted2", 240);
        addColor(valueToBeChanged2, "sorted2", 240);
        removeColor(valueToBeChanged1, "sorted3", 240);
        removeColor(valueToBeChanged2, "sorted3", 240);
        
        addColor(valueToBeChanged1, "sorted1", 280);
        addColor(valueToBeChanged2, "sorted1", 280);
        removeColor(valueToBeChanged1, "sorted2", 280);
        removeColor(valueToBeChanged2, "sorted2", 280);

        removeColor(valueToBeChanged1, "sorted1", 320);
        removeColor(valueToBeChanged2, "sorted1", 320);
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