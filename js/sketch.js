let elements = [];
let palette;
let backgroundImage;
let mouseWasDragged = false;

function preload() {
    Button.icons = [
        loadImage('img/sun.png'),
        loadImage('img/rain.png'),
        loadImage('img/snow.png'),
        loadImage('img/ice.png')
    ];
    Button.backgroundImages = [
        loadImage('img/button.png'),
        loadImage('img/button-hovered.png'),
        loadImage('img/button-selected.png'),
    ];

    backgroundImage = loadImage('img/background.png');
}

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('main-section');

    palette = new Palette(30, height - 95);
}

function draw() {
    image(backgroundImage, 0, 0, width, height);
    cursor('default');

    for (let elem of elements) {
        elem.update(elements);
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
    mouseWasDragged = true;
}

function mouseClicked() {
    console.log('clicked');
    if (palette.anyButtonHovered()) {
        return;
    }
    if (palette.selectedElement === Sun && mouseWasDragged) {
        mouseWasDragged = false;
        return;
    }
    addElement(mouseX, mouseY);
    mouseWasDragged = false;
}

function mousePressed() {
    palette.onMousePressed();
}

function mouseReleased() {
    for (let i = elements.length - 1; i >= 0; i--) {
        if (elements[i].dead) {
            elements.splice(i, 1);
        }
    }
    for (let elem of elements) {
        elem.contactedSun = false;
    }
}
