function Shape(radius) {
    this.radius = radius;

    // 对象方法可以调用原型链上的方法
    this.move = () => {
        this.draw();

        console.log(`move shape ${this.radius}`);
    };
}

// 原型链增加的方法可以访问对象属性
Shape.prototype.draw = function () {
    console.log(`draw shape ${this.radius}`);
};

// 原型链可以访问对象属性
Shape.prototype.getArea = function () {
    return Math.PI * this.radius * this.radius;
};
