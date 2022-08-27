class Element {

    x;
    y;
    lifetime;
    decaySpeed;
    dead;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lifetime = 255;
        this.decaySpeed = 1;
        this.dead = false;
    }

    update() {
        this.lifetime -= this.decaySpeed;
        if (this.lifetime <= 0) {
            this.die();
        }
    }

    draw() {
        noStroke();
        fill(102, 153, 204, this.lifetime);
        circle(this.x, this.y, 20);
    }

    die() {
        this.dead = true;
    }

}
