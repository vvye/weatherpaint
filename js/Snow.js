class Snow extends Element {

    static description = 'Snow';
    decaySpeed = 5;

    onSunContact(elements) {
        super.onSunContact();
        this.die();
        let newElement = new Rain(this.x, this.y);
        newElement.lifetime = this.lifetime;
        newElement.contactedSun = true;
        elements.push(newElement);
    }

    draw() {
        noStroke();
        fill(186, 219, 173, this.lifetime);
        randomSeed(this.seed);
        for (let i = 0; i <= 2; i++) {
            let xOffset = random() * 30 - 20;
            let yOffset = random() * 30 - 20;
            let r = random() * 50 + 20;
            circle(this.x + xOffset, this.y + yOffset, r);
        }

    }

}
