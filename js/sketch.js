let elements = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('main-section');

    elements.push(new Element(200, 200));
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

function mouseDragged() {
    elements.push(new Element(mouseX, mouseY));
}

function mouseClicked() {
    elements.push(new Element(mouseX, mouseY));
}
