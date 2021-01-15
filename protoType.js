function Shape(color) {
    this.color = color;

    // 对象方法可以调用原型链上的方法
    this.move = () => {
        this.draw();

        console.log(`move shape ${this.color}`);
    };
}

// 原型链增加的方法可以访问对象属性
Shape.prototype.draw = function () {
    console.log(`draw shape ${this.color}`);
};

// 原型链可以访问对象属性
Shape.prototype.getColor = function () {
    return this.color;
};

function Circle(radius, color) {
    // 将Shape中定义的属性和方法绑定到Circle上
    Shape.call(this, color);
    this.radius = radius;

    // 覆盖原型链方法
    this.move = () => {
        console.log(`move circle ${this.color}`);
    };
}

extend(Circle, Shape);

// 覆盖原型链方法
Circle.prototype.draw = function () {
    console.log(`draw circle ${this.color}`);
};
