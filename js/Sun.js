class Sun extends Element {

    static description = 'Sun - turns hail into snow, snow into rain, and removes rain.';
    w = 80;

    constructor(x, y) {
        super(x, y);
        this.die();
    }

    update(elements) {
        for (let elem of elements) {
            if (elem.contactedSun) {
                continue;
            }
            let dx = (elem.x - this.x);
            let dy = (elem.y - this.y);
            if (dx * dx + dy * dy <= this.w * this.w) {
                elem.onSunContact(elements);
            }
        }
    }

    drawAsCursor() {
        let padding = 20;
        noFill();
        stroke(230, 230, 0);
        strokeWeight(4);
        circle(this.x + padding, this.y + padding, this.w + 2 * padding);
    }

}
