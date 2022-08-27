let elements = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('main-section');

    elements.push(new Element(200, 200));
}

function draw() {
    background(0);

    for (let elem of elements) {
        elem.update();
        elem.draw();
    }
}
