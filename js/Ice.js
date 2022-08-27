class Ice extends Element {

    draw() {
        noStroke();
        fill(255, 255, 255, this.lifetime);
        circle(this.x, this.y, 30);
    }

}
