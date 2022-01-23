class Circle {
    constructor(x, y, radius) {
        this.pos = new Vector(x, y);
        this.radius = radius;
        this.color = '#000000'
    }

    render() {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Angle.toRadians(360));
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
    }
}