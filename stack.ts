class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
    
    clear(): void {
        this.items = [];
    }
}

class BracketValidator {
    private readonly pairs: Record<string, string> = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
  
    validate(input: string): boolean {
      const stack = new Stack<string>();
  
      for (let i = 0; i < input.length; i++) {
        const symbol = input[i];
  
        if (this.isOpening(symbol)) {
          stack.push(symbol);
        } else if (this.isClosing(symbol)) {
          const lastOpening = stack.pop();
  
          if (!lastOpening) {
            console.error(`❌ No opening symbol for -> ${symbol} at position ${i}`);
            return false;
          }
  
          const isMatched = this.checkMatch(lastOpening, symbol);
          if (!isMatched) {
            console.error(
              `❌ Wrong close symbol for -> ${lastOpening}, got -> ${symbol}, expected -> ${this.pairs[lastOpening]} at position ${i}`
            );
            return false;
          }
        }
      }
  
      if (!stack.isEmpty()) {
        console.error(`❌ Unmatched opening symbol(s): ${stack}`);
        return false;
      }
  
      return true;
    }
  
    private checkMatch(open: string, close: string): boolean {
      return this.pairs[open] === close;
    }
  
    private isOpening(symbol: string): boolean {
      return Object.keys(this.pairs).includes(symbol);
    }
  
    private isClosing(symbol: string): boolean {
      return Object.values(this.pairs).includes(symbol);
    }
  }

const bracketValidator = new BracketValidator();

const stroka_1 = "{ hi mark ] and ()}"
const stroka_2 = "{ hi [ mark ] and ( }"
const stroka_3 = "{ [ mark ) }"
const stroka_4 = "{ hi [ mark ] and ()}"

console.log(bracketValidator.validate(stroka_1))
console.log(bracketValidator.validate(stroka_2))
console.log(bracketValidator.validate(stroka_3))
console.log(bracketValidator.validate(stroka_4))