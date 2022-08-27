class Button {

    static icons;
    static backgroundImage;
    x;
    y;
    w;
    iconIndex;
    element;
    yOffset = 0;
    maxYOffset = 12;

    constructor(x, y, iconIndex, element) {
        this.x = x;
        this.y = y;
        this.w = 70;
        this.iconIndex = iconIndex;
        this.element = element;
        this.yOffset = 0;
    }

    draw(selected) {

        if (this.hovered()) {
            cursor('pointer');
        }

        if (selected) {
            if (this.yOffset < this.maxYOffset) {
                this.yOffset += 1.2;
            }
        } else {
            if (this.yOffset > 0) {
                this.yOffset -= 1;
            }
        }

        let y = this.y - this.yOffset;
        let backgroundImage = Button.backgroundImages[selected ? 2 : this.hovered() ? 1 : 0];
        image(backgroundImage, this.x, y);
        image(Button.icons[this.iconIndex], this.x + 18, y + 18);
    }

    hovered() {
        let y = this.y - this.yOffset;
        return mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= y && mouseY <= y + this.w;
    }


}
