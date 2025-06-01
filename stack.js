var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    return Stack;
}());
var BracketValidator = /** @class */ (function () {
    function BracketValidator() {
        this.pairs = {
            '(': ')',
            '[': ']',
            '{': '}',
        };
    }
    BracketValidator.prototype.validate = function (input) {
        var stack = new Stack();
        for (var i = 0; i < input.length; i++) {
            var symbol = input[i];
            if (this.isOpening(symbol)) {
                stack.push(symbol);
            }
            else if (this.isClosing(symbol)) {
                var lastOpening = stack.pop();
                if (!lastOpening) {
                    console.error("\u274C No opening symbol for -> ".concat(symbol, " at position ").concat(i));
                    return false;
                }
                var isMatched = this.checkMatch(lastOpening, symbol);
                if (!isMatched) {
                    console.error("\u274C Wrong close symbol for -> ".concat(lastOpening, ", got -> ").concat(symbol, ", expected -> ").concat(this.pairs[lastOpening], " at position ").concat(i));
                    return false;
                }
            }
        }
        if (!stack.isEmpty()) {
            console.error("\u274C Unmatched opening symbol(s): ".concat(stack));
            return false;
        }
        return true;
    };
    BracketValidator.prototype.checkMatch = function (open, close) {
        return this.pairs[open] === close;
    };
    BracketValidator.prototype.isOpening = function (symbol) {
        return Object.keys(this.pairs).includes(symbol);
    };
    BracketValidator.prototype.isClosing = function (symbol) {
        return Object.values(this.pairs).includes(symbol);
    };
    return BracketValidator;
}());
var bracketValidator = new BracketValidator();
var stroka_1 = "{ hi mark ] and ()}";
var stroka_2 = "{ hi [ mark ] and ( }";
var stroka_3 = "{ [ mark ) }";
var stroka_4 = "{ hi [ mark ] and ()}";
console.log(bracketValidator.validate(stroka_1));
console.log(bracketValidator.validate(stroka_2));
console.log(bracketValidator.validate(stroka_3));
console.log(bracketValidator.validate(stroka_4));
