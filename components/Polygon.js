class Polygon {
    constructor(x, y, radius, sides) {
        this.pos = new Vector(x, y);
        this.radius = radius;
        this.sides = sides;
    }
    render() {
        let angle = Angle.toRadians(90);

        const points = [];
        const sides = [];

        ctx.beginPath();
        for (let i = 0; i < this.sides; i++) {
            let point = Angle.toCaretesian(this.pos.x, this.pos.y, this.radius, angle);
            if (i == 0) ctx.moveTo(point.x, point.y);
            else {
                ctx.lineTo(point.x, point.y);
                sides.push([{ x: points[i - 1].x, y: points[i - 1].y }, { x: point.x, y: point.y }]);
            }

            points.push({ x: point.x, y: point.y });
            // circumference / sides to create segments of the circle
            angle += Angle.toRadians(360 / this.sides)
        }
        ctx.closePath();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}