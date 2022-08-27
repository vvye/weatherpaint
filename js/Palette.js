class Palette {

    buttons;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.initButtons();
    }

    draw() {
        for (let button of this.buttons) {
            button.draw();
        }
    }

    initButtons() {
        this.buttons = [
            new Button(this.x, this.y, 0, null),
            new Button(this.x + 75, this.y, 1, Rain),
            new Button(this.x + 150, this.y, 2, Snow),
            new Button(this.x + 225, this.y, 3, Ice),
        ];
    }

    onMousePressed() {
        for (let button of this.buttons) {
            if (button.hovered()) {
                this.selectedElement = button.element;
            }
        }
    }

}
