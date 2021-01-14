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

const extend = (Child, Parent) => {
    // 将Child的原型指向Parent实Parent现继承
    // 但这样会修改Child的__proto__的contructor属性，导致变成Parent
    // 如果不重新绑定构造器，会导致创建的对象实际是Parent类型
    // 但此时Child并不会集成Parent的属性，只是原型链定义的方法可以调用（沿着原型链向上查找得到)
    Child.prototype = Object.create(Parent.prototype);
    // 恢复Circle的prototype的构造器
    Child.prototype.contructor = Child;
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
