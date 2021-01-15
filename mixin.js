const canEat = {
    eat: function () {
        this.hunger--;

        console.log('eating');
    },
};

const canWalk = {
    walk: function () {
        console.log('walking');
    },
};

const canSwim = {
    swim: function () {
        console.log('swimming');
    },
};

function Person() {}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
person.walk();
person.eat();

function Fish() {}

mixin(Fish.prototype, canEat, canSwim);
const fish = new Fish();
fish.eat();
fish.swim();
