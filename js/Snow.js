class Snow extends Element {

    draw() {
        noStroke();
        fill(203, 203, 204, this.lifetime);
        circle(this.x, this.y, 30);
    }

}
