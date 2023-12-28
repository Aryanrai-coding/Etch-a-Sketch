// make a loop for 16 

// inside the loop create div with width of 960/16 px
// give them border of 1px solid black


function makeGrids(size) {
    let screen = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "1px solid black";
            // row.innerText = (i * size) + j;
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    makeGrids(16);
    // Add event listeners to each row for the hover effect
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.addEventListener('mouseenter', function () {
            row.style.backgroundColor = "#000"; // Change to your desired hover color
        });
    });
});


let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let size = prompt('What dimension screen you want?');

    if (size <= 100) {

        let screen = document.querySelector('.container');
        screen.innerHTML = '';

        makeGrids(size);

        let rows = document.querySelectorAll('.row');

        rows.forEach(row => {
            row.addEventListener('mouseenter', function () {
                row.style.backgroundColor = "#000";
            });
        });
    } else {
        alert('Size should not be more than 100!');
    }


})

