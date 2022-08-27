class Rain extends Element {

    decaySpeed = 2;

    draw() {
        noStroke();
        fill(22, 110, 67, this.lifetime);
        randomSeed(this.seed);
        for (let i = 0; i <= 2; i++) {
            let xOffset = random() * 100 - 50;
            let yOffset = random() * 100 - 50;
            let r = random() * 10 + 10;
            circle(this.x + xOffset , this.y + yOffset, r);
        }
    }

}
