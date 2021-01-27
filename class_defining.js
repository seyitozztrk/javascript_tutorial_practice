function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
//console.log(carrot.name);

//another example 

class Book {
    constructor(author) {
        this._author = author;
    }

    //getter
    get writer() {
        return "author is "+this._author;
    }

    set writer(updatedAuthor) {
        this._author = updatedAuthor;
        console.log("author is changed with " + updatedAuthor);
    }
}

const book1 = new Book('Fydor Dostoyevski');
console.log(book1.writer)
book1._author = 'Sabahattin Ali';
console.log(book1._author)