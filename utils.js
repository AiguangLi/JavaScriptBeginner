const mixin = (target, ...sources) => {
    Object.assign(target, ...sources);
};

const extend = (Child, Parent) => {
    // 将Child的原型指向Parent实Parent现继承
    // 但这样会修改Child的__proto__的contructor属性，导致变成Parent
    // 如果不重新绑定构造器，会导致创建的对象实际是Parent类型
    // 但此时Child并不会集成Parent的属性，只是原型链定义的方法可以调用（沿着原型链向上查找得到)
    Child.prototype = new Parent();
    // 恢复Circle的prototype的构造器
    Child.prototype.contructor = Child;
};
