class Application {
    private name: string;
    static count: number = 0;
    constructor(name: string) {
        this.name = name;
        Application.count++;
    }
}
console.log(Application);
let app1 = new Application('app 1');
console.log(Application.count);
let app2 = new Application('app2');
console.log(Application.count)