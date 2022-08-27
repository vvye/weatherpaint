let elements = [];

let selectableElements = [Rain, Snow, Ice];
let selectedElementIndex = 0;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('main-section');
}

function draw() {
    background(0);

    for (let i = elements.length - 1; i >= 0; i--) {
        let elem = elements[i];
        elem.update();
        elem.draw();
        if (elem.dead) {
            elements.splice(i, 1);
        }
    }

}

function keyPressed() {
    selectedElementIndex = (selectedElementIndex + 1) % selectableElements.length;
}

function mouseDragged() {
    elements.push(new selectableElements[selectedElementIndex](mouseX, mouseY));
}

function mouseClicked() {
    elements.push(new selectableElements[selectedElementIndex](mouseX, mouseY));
}
