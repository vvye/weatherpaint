let elements = [];
let palette;

let selectableElements = [Rain, Snow, Ice];
let selectedElementIndex = 0;

function preload() {
    Button.icons = [
        loadImage('img/sun.png'),
        loadImage('img/rain.png'),
        loadImage('img/snow.png'),
        loadImage('img/ice.png')
    ];
}

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('main-section');
    let context = canvas.elt.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;

    palette = new Palette(35, height - 65);
}

function draw() {
    background(0);
    cursor('default');

    for (let i = elements.length - 1; i >= 0; i--) {
        let elem = elements[i];
        elem.update();
        elem.draw();
        if (elem.dead) {
            elements.splice(i, 1);
        }
    }

    palette.draw();

}

function addElement(x, y) {
    let element = palette.selectedElement;
    elements.push(new element(x, y))
}

function mouseDragged() {
    addElement(mouseX, mouseY);
}

function mouseClicked() {
    addElement(mouseX, mouseY);
}

function mousePressed() {
    palette.onMousePressed();
}
