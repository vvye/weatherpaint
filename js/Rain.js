class Rain extends Element {

    draw() {
        noStroke();
        fill(102, 153, 204, this.lifetime);
        circle(this.x, this.y, 20);
    }

}
