"use strict";
class Application {
    constructor(name) {
        this.name = name;
        Application.count++;
    }
}
Application.count = 0;
console.log(Application);
let app1 = new Application('app 1');
console.log(Application.count);
let app2 = new Application('app2');
console.log(Application.count);
