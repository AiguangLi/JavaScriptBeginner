function HtmlElement() {
    this.click = function () {
        console.log('HtmlElement Clicked.');
    };
}

HtmlElement.prototype.focus = function () {
    console.log('HtmlElement Focused.');
};

function HtmlSelectElement(items) {
    this.items = items || [];

    this.addItem = item => {
        this.items.push(item);

        console.log('added');
    };

    this.removeItem = item => {
        const index = this.items.indexOf(item);

        this.items.splice(index, 1);

        console.log('removed');
    };
}

extend(HtmlSelectElement, HtmlElement);
HtmlSelectElement.prototype.click = () => {
    console.log('HtmlSelectElement Clicked.');
};
