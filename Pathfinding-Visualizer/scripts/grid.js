let condition1 = false;
let condition2 = false;

let screenHeight = window.outerHeight;
let screenWidth = window.outerWidth;

let height = 22;
let width = 40;

if (screenHeight <= 640 || screenWidth <= 986) {
    height = 20;
    width = 26;
}
if (screenHeight <= 640 || screenWidth <= 660) {
    height = 20;
    width = 14;
}
if (screenHeight <= 640 || screenWidth <= 360) {
    height = 18;
    width = 12;
}

createGrid();

function createGrid() {
    let table = document.querySelector("#pixelCanvas");

    for(let i = 0; i <= height; i++){
        
        //Creating the rows
        let row = document.createElement("tr");
        row.id = i;

        table.appendChild(row);
        let rowSpecific = document.getElementById(i);

        for(let j = 0; j <= width; j++) {

            //Creating the columns and individual squares
            let cell = document.createElement("td");
            cell.id = i + "," + j;
            rowSpecific.appendChild(cell);

            //Painting squares by clicking and/or holding
            cell.addEventListener("mousedown", () => {
                condition1 = true;
                paintByHolding(cell);
            });
            cell.addEventListener("mouseover", () => {
                condition2 = true;
                paintByHolding(cell);
            });
            cell.addEventListener("mouseup", () => {
                condition1 = false;
                condition2 = false;
                paintByClicking(cell)
            });

            function paintByClicking(element){
                if (element.classList.contains("startNode") || element.classList.contains("endNode") || element.classList.contains("endNodeReached")) { }
                else {
                    element.classList.add("wallTransition");

                    setTimeout(function() {
                        if(element.classList.contains("wallTransition")){
                            element.classList.add("wall");
                        }
                    },150);

                    setTimeout(function() {
                        if(element.classList.contains("wall")){
                            element.classList.remove("wallTransition");
                        }
                    },300);
                }
            }
            
            function paintByHolding(element) {
                if (element.classList.contains("startNode") || element.classList.contains("endNode") || element.classList.contains("endNodeReached")) { }
                else if(condition1 == true && condition2 == true) {
                    element.classList.add("wallTransition");

                    setTimeout(function() {
                        if(element.classList.contains("wallTransition")){
                            element.classList.add("wall");
                        }
                    },150);

                    setTimeout(function() {
                        if(element.classList.contains("wall")){
                            element.classList.remove("wallTransition");
                        }
                    },300);
                    
                    //Repainting start and end node cause of bugs :p
                    if(i == 11 && j == 9) {
                        element.classList.add("startNode");
                        element.classList.remove("wall");
                    }
                    if(i == 11 && j == 31) {
                        element.classList.add("endNode");
                        element.classList.remove("wall");
                    }
                }
            }

            //Creating a default start-node and an end-node
            if (width == 40) {
                if(i == 11 && j == 9){
                    cell.classList.add("startNode");
                    cell.classList.remove("wall");
                }
                if(i == 11 && j == 31){
                    cell.classList.add("endNode");
                    cell.classList.remove("wall");
                }
            }
            else if (width == 26) {
                if(i == 10 && j == 7){
                    cell.classList.add("startNode");
                    cell.classList.remove("wall");
                }
                if(i == 10 && j == 19){
                    cell.classList.add("endNode");
                    cell.classList.remove("wall");
                }
            }
            else if (width == 14) {
                if(i == 7 && j == 7){
                    cell.classList.add("startNode");
                    cell.classList.remove("wall");
                }
                if(i == 13 && j == 7) {
                    cell.classList.add("endNode");
                    cell.classList.remove("wall");
                }
            }
            else if (width == 12) {
                if(i == 5 && j == 6){
                    cell.classList.add("startNode");
                    cell.classList.remove("wall");
                }
                if(i == 13 && j == 6){
                    cell.classList.add("endNode");
                    cell.classList.remove("wall");
                }
            }
            
        }
    }
    /*
    for(let i = 0; i <= height; i++){
        for(let j = 0; j <= width; j++) {

            let cell = document.getElementById(i + "," + j);

            if(cell.classList.contains("startNode") || cell.classList.contains("startNodeReached"))
            //cell.innerHTML = '<svg id="specialSVG2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-pin" class="svg-inline--fa fa-map-pin fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path fill="currentColor" d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path></svg>';
            //cell.innerHTML = '<svg id="specialSVG2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker" class="svg-inline--fa fa-map-marker fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"></path></svg>';
                cell.innerHTML = '<svg id="specialSVG1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>';

            if(cell.classList.contains("endNode") || cell.classList.contains("endNodeReached"))
                cell.innerHTML = '<svg id="specialSVG2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>';
        }
    }*/
}