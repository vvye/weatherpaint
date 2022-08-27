class Button {

    static icons;
    x;
    y;
    w;
    iconIndex;
    element;

    constructor(x, y, iconIndex, element) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.iconIndex = iconIndex;
        this.element = element;
    }

    draw() {
        noStroke();
        fill(75, 75, 100);
        circle(this.x + this.w / 2, this.y + this.w / 2, this.w * 1.25);
        image(Button.icons[this.iconIndex], this.x, this.y, this.w, this.w);
    }

    hovered() {
        return mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.w;
    }


}
