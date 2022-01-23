/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
let mousex = 0, mousey = 0;

canvas.resize();


const c1 = new Circle(canvas.width / 2, canvas.height / 2, 50);
const c2 = new Circle(mousex, mousey, 30);


window.addEventListener('mousemove', (e) => {
    c2.pos.x = e.clientX;
    c2.pos.y = e.clientY;
});

render();

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    [c1.color, c2.color] = colission() ? ['#FF0000', '#FF0000'] : ['#000000', '#000000']
    c1.render();
    c2.render();
    requestAnimationFrame(render);
}

function colission() {
    const distance = Vector.distance(c1.pos, c2.pos);
    const radiusSum = c1.radius + c2.radius;
    return radiusSum > distance;
}

