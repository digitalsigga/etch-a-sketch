
const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
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