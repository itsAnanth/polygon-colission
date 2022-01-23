class Vector {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(v1, v2) {
        return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2));
    }
}