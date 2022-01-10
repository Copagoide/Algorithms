//arrayLength = 60;


const newButton = document.querySelector("#newButton");

newButton.addEventListener('click', () => {console.log(array);
    let tableSet = document.querySelector("#tableSet");
    array = [];

    //Removing the tables:
    for (let j = 0; j < arrayLength; j++) {
        let removeTrTd = document.getElementById("[tr:" + j + "]");
        tableSet.removeChild(removeTrTd);
    }

    //Creating the tables:
    for(let i = 0; i < arrayLength; i++){
        setTimeout(() => {
            let tableRow = document.createElement("tr");
            tableRow.id = "[tr:" + i + "]";
            tableSet.appendChild(tableRow);

            
            let number = createRandomNumber();
            let tableData = document.createElement("td");
            tableData.id = "[td:" + i + "]";
            tableData.classList.add("td");
            tableData.style.height = number + "px";   //console.log(i + ": " + number);
            array.push(number);
            tableRow.appendChild(tableData);
        }, i * 3);
    }
})

function createRandomNumber() {
    number = Math.floor(Math.random()*200 + Math.random()*10) + 10;
    return number;
}

