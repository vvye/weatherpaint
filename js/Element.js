class Element {

    x;
    y;
    lifetime = 3000;
    decaySpeed = 1;
    dead = false;
    contactedSun = false;
    seed;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.seed = this.x * 31 + this.y;
    }

    update() {
        this.lifetime -= this.decaySpeed;
        if (this.lifetime <= 0) {
            this.die();
        }
    }

    draw() {
    }

    onSunContact(elements) {
        this.contactedSun = true;
    }

    die() {
        this.dead = true;
    }

}
