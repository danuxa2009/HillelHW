// function Log(text) {

//     this.text = text;

// }

// Log.prototype.showText = function() {
//     console.log('cb ' + format(this.text));
// }

// function formatToUpperCase(text) {
//     return text.toUpperCase();
// }


// Log.format = function(text)

// const logger = new Log('Hello world');



// document.getElementById('header').addEventListener('click', logger.showText);



// class Log1 {
//     constructor(text) {
//         this.text = text;
//     }
//     showText(prefix) {
//         console.log(prefix + this.text);
//     }
// }

// const logger = new Log('Hello world');


class Human {

    static DEFAULT_AGE = 30;
    static format(text) {
        return text.toUpperCase();
    }
    constructor(name, age) {
        this.name = name;
        this.type = 'Human;'
        this.age = age || Human.DEFAULT_AGE;
    }

    run() {
        console.log(this.name + ' is runnibng');
    }
}

class Student extends Human {
    constructor(name) {
        super(name);
        this.type = 'Student';
    }
    run() {
        super.run();
        console.log('Student running');
    }
    eat() {
        console.log(this.name + ' eating')
    }
}