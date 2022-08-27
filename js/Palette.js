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
        let spacing = 85;
        this.buttons = [
            new Button(this.x, this.y, 0, null),
            new Button(this.x + spacing, this.y, 1, Rain),
            new Button(this.x + 2 * spacing, this.y, 2, Snow),
            new Button(this.x + 3 * spacing, this.y, 3, Ice),
        ];
    }

    onMousePressed() {
        for (let button of this.buttons) {
            if (button.hovered()) {
                this.selectedElement = button.element;
            }
        }
    }

    anyButtonHovered() {
        for (let button of this.buttons) {
            if (button.hovered()) {
                return true;
            }
        }
        return false;
    }

}
