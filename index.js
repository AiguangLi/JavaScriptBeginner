const createAddress = (city, street, zipCode) => {
    return {
        city,
        street,
        zipCode,
    };
};

const address1 = createAddress('北京', '中关村', '100080');

console.log(address1);

function Address(city, street, zipCode) {
    this.city = city;
    this.street = street;
    this.zipCode = zipCode;
}

const address2 = new Address('上海', '徐家汇', '210911');
console.log(address2);

const showAddress = address => {
    for (let key in address) {
        console.log(`${key}:${address[key]}`);
    }
};

const addresses = [address1, address2];

for (address of addresses) {
    showAddress(address);
}

const numbers = [1, 2, 3, 4];
const moved = move(numbers, 1, 3);
console.log(moved);

function move(array, index, offset) {
    if (index + offset > array.length || index + offset < 0) {
        console.error('Invalid Offset!');

        return;
    }

    const elements = [...array];
    const elementToMove = elements.splice(index, 1)[0];
    elements.splice(index + offset, 0, elementToMove);

    return elements;
}

function countOccurences(numbers, element) {
    return numbers
        .map(item => (item == element ? 1 : 0))
        .reduce((sum, current) => {
            return (sum += current);
        });
}

function Circle(radius) {
    this.radius = radius;
    //let定义属于块变量，属性为私有成员
    let defaultLocation = { x: 0, y: 0 };
    let color = 'red';
    let computeOptimumLocation = function () {
        defaultLocation.x += 1;
        console.log('private function', defaultLocation);
    };
    // 定义get属性
    Object.defineProperty(this, 'area', {
        get: function () {
            return Math.PI * radius * radius;
        },
    });

    // 定义get/set属性
    Object.defineProperty(this, 'color', {
        get: function () {
            return color;
        },
        set: function (value) {
            color = value;
        },
    });

    this.draw = function () {
        computeOptimumLocation();

        console.log('draw');
    };
}

const circle = new Circle(1);
circle.draw();
circle.area = 10.0;
console.log('color before set: ', circle.color);
circle.color = 'blue';
console.log('color after set: ', circle.color);
console.log(circle.area);
