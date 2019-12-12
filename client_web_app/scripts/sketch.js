const NUMBER_OF_STATE = 5;

let h = Math.sqrt(3) / 3 * 300;
let shapes;
let hex;

let state = 0;
let triangleMoveTo, triangleLineTo;

function setup() {
    createCanvas(800, 400);

    h = Math.sqrt(3) / 2 * 100;

    shapes = createGraphics(100, Math.ceil(h));
    shapes.noStroke();
    shapes.angleMode(DEGREES);

    hex = createGraphics(200, 200);
    hex.angleMode(DEGREES);
    imageMode(CENTER);
}

function keyReleased() {
    if (key === "a") {
        state = 0;
    }
    else if (key == "z") {
        state = 1;
    }
    else if (key == "e") {
        state = 2;
    }
    else if (key == "r") {
        state = 3;
    }
    else if (key == "t") {
        state = 4;
    }
}

function draw() {
    background(colorFromPalette(2));

    drawTriangle();
    drawHex();

    if (state == 0) {
        triangleMoveTo = 70;
        triangleLineTo = 5;
    }
    else if (state == 1) {
        triangleMoveTo = 80;
        triangleLineTo = 0;
    }
    else if (state == 2) {
        triangleMoveTo = 30;
        triangleLineTo = 5;
    }
    else if (state == 3) {
        triangleMoveTo = 100;
        triangleLineTo = 10;
    }
    push();
    translate(200, 200);
    scale(0.5);
    translate(h * -2, -300);
    tessellate(3);
    translate(-h, 150);
    tessellate(4);
    translate(-h, 150);
    tessellate(5);
    translate(h, 150);
    tessellate(4);
    translate(h, 150);
    tessellate(3);
    pop();
}


function colorFromPalette(n) {
    if (state == 0) {
        palette = ['#DBFF33', '#33FFBD', 'black', '#FFBD33', '#FF5733 '];
    }
    else if (state == 1) {
        palette = ['black', 'white', 'white', 'white', 'black'];
    }
    else if (state == 2) {
        palette = ['#33FFF0', '#33A8FF', 'black', '#FF33A8', '#8A33FF'];
    }
    else if (state == 3) {
        palette = ['#FF7433', '#FFDA33', 'black', '#BEFF33', '#33FF74'];
    }

    return palette[n % (palette.length)];
}

function drawTriangle() {
    const ctx = shapes.drawingContext;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(triangleMoveTo, 0);
    ctx.lineTo(700, h);
    ctx.lineTo(triangleLineTo, h);
    ctx.clip();
    shapes.clear();
    shapes.rotate(frameCount);
    shapes.fill(colorFromPalette(0));
    if (state == 0) {
        shapes.ellipse(100, 50, 80);
    }
    else if (state == 1) {
        shapes.rect(20, 20, 50, 50);
    }
    else if (state == 2) {
        shapes.ellipse(100, 50, 80);
    }
    shapes.fill(colorFromPalette(2));
    if (state == 0) {
        shapes.rect(20, 20, 50, 50);
    }
    else if (state == 1) {
        shapes.triangle(-60, 0, -30, -40, -30, 0);
    }
    else if (state == 2) {
        shapes.triangle(0, 10, 80, 90, 0, 100);
    }
    else if (state == 3) {
        shapes.ellipse(-40, -46, 20);
    }

    shapes.fill(colorFromPalette(1));
    shapes.triangle(20, 0, 50, 30, 30, 60);
    shapes.fill(colorFromPalette(4));
    if (state == 0) {
        shapes.rect(20, 20, 50, 50);
    }
    else if (state == 1) {
        shapes.triangle(-60, 0, -30, -40, -30, 0);
    }
    else if (state == 2) {
        shapes.ellipse(100, 50, 80);
    }
    shapes.fill(colorFromPalette(1));
    shapes.ellipse(-50, -50, 50);
    shapes.fill(colorFromPalette(5));
    shapes.ellipse(-40, -46, 20);
    shapes.fill(colorFromPalette(0));
    shapes.triangle(-60, 0, -30, -40, -30, 0);
    shapes.fill(colorFromPalette(3));
    shapes.rect(-45, 0, 40, 300);
    shapes.rotate(17);
    shapes.fill(colorFromPalette(4));
    shapes.rect(30, 40, 10, 40);
    shapes.rotate(37);
    shapes.fill(colorFromPalette(6));
    shapes.triangle(-60, 0, -30, -40, -30, 0);
    shapes.rotate(180);
    shapes.fill(colorFromPalette(0));
    shapes.triangle(10, 20, 80, 90, 0, 100);
    shapes.translate(20, 0);
    shapes.rotate(20);
    shapes.fill(colorFromPalette(3));
    if (state == 2) {
        shapes.triangle(10, 20, 80, 90, 0, 100);
    }
    else if (state == 0) {
        shapes.rect(20, 20, 50, 50);
    }
    else if (state == 1) {
        shapes.rect(20, 20, 50, 50);
    }
    ctx.restore();
}

function drawHex() {
    hex.push();
    hex.clear();
    hex.translate(100, 100);
    hex.push();
    hex.scale(1 / pixelDensity());
    hex.rotate(30);
    for (let i = 0; i < 3; i++) {
        hex.drawingContext.drawImage(shapes.elt, -50 * pixelDensity(), 0);
        hex.scale(-1, 1);
        hex.rotate(60);
        hex.drawingContext.drawImage(shapes.elt, -50 * pixelDensity(), 0);
        hex.rotate(60);
        hex.scale(-1, 1);
    }
    hex.pop();
    hex.pop();
}

function tessellate(n) {
    push();
    for (let i = -4; i < n; i++) {
        push();
        scale(1 / pixelDensity());
        drawingContext.drawImage(hex.elt, -100 * pixelDensity(), -100 * pixelDensity());
        pop();
        translate(h * 2, 0);
    }
    pop();
}
