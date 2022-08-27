let elements = [];
let palette;
let backgroundImage;

function preload() {
    Button.icons = [
        loadImage('img/sun.png'),
        loadImage('img/rain.png'),
        loadImage('img/snow.png'),
        loadImage('img/ice.png')
    ];
    backgroundImage = loadImage('img/background.png');
}

function setup() {
    let canvas = createCanvas(800, 600);
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
    image(backgroundImage, 0, 0, width, height);
    cursor('default');

    for (let elem of elements) {
        elem.update();
        elem.draw();
    }

    for (let i = elements.length - 1; i >= 0; i--) {
        if (elements[i].dead) {
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
