class Button {

    static icons;
    x;
    y;
    w;
    iconIndex;
    element;
    yOffset;
    maxYOffset;

    constructor(x, y, iconIndex, element) {
        this.x = x;
        this.y = y;
        this.w = 34;
        this.iconIndex = iconIndex;
        this.element = element;
        this.yOffset = 0;
        this.maxYOffset = 12;
    }

    draw(selected) {

        if (this.hovered()) {
            cursor('pointer');
        }

        if (this.hovered() || selected) {
            stroke(255);
            strokeWeight(4);
            fill(100, 100, 125);
        } else {
            noStroke();
            fill(75, 75, 100);
        }

        if (selected) {
            if (this.yOffset < this.maxYOffset) {
                this.yOffset += 1;
            }
        } else {
            if (this.yOffset > 0) {
                this.yOffset -= 1;
            }
        }

        circle(this.x + this.w / 2, this.y - this.yOffset + this.w / 2, this.w * 1.75);
        image(Button.icons[this.iconIndex], this.x, this.y - this.yOffset, this.w, this.w);
    }

    hovered() {
        return mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.w;
    }


}
