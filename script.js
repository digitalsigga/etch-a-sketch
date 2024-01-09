
const container = document.querySelector('#container');

const button = document.createElement("BUTTON");

newGrid(16);

function newGrid(number) {
    container.innerHTML = "";

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            const content = document.createElement('div');
            content.classList.add('content');
            // content.textContent = "hey";
            container.append(content);
        }
    }

    const hov = document.querySelectorAll(".content");

hov.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "orange";
    });
});

}

function getNumb() {
    let numb = prompt("How many squares per side?");

    if(!isNaN(numb)) {
        newGrid(parseInt(numb,numb));
    } else {
        alert("Please enter a valid number");
    }
}

if (typeof numb === "number") {
    newGrid(numb);
  }

const btn = document.querySelector("#btn");

btn.addEventListener('click', getNumb);

