class Palette {

    buttons;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.initButtons();
    }

    draw() {
        for (let button of this.buttons) {
            let selected = (this.selectedElement === button.element);
            button.draw(selected);
        }
    }

    initButtons() {
        this.buttons = [
            new Button(this.x, this.y, 0, null),
            new Button(this.x + 70, this.y, 1, Rain),
            new Button(this.x + 140, this.y, 2, Snow),
            new Button(this.x + 210, this.y, 3, Ice),
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
