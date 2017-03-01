class myMap {
    constructor() {
        this.obj = [];
        this.size = 0;
    }
    put(key, value) {
        let repeat = 0;
        let i = 0;
        var pass = { key, value };

        if (this.obj.length == 0) {
            this.obj.push(pass);
            this.size++;
        } else {
            for (i = 0; i < this.obj.length; i++) {
                if (this.obj[i]['key'] == key) {
                    this.obj[i]['value'] = value;
                    repeat = 1;
                }
            }
            if (repeat == 0) {
                this.obj.push(pass);
                repeat = 0;
                this.size++;
            }
        }

    }




    get(key) {
        let returnVal = 0;
        let i = 0;
        for (i = 0; i < this.obj.length; i++) {
            if (this.obj[i].hasOwnProperty('key')) {
                returnVal = 1;
                return this.obj[i]['value'];
            }
        }
        if (returnVal == 0) {
            return 'undefined';
        }
    }
    has(key) {
        let returnVal = 0;
        let i = 0;
        for (i = 0; i < this.obj.length; i++) {
            if (this.obj[i]['key'] == key) {
                returnVal = 1;

            }
        }
        if (returnVal == 0) {
            return false;
        } else {
            return true;
        }
    }
    clear() {
        this.obj = null;
        this.size = 0;
    }
    printMap() {
        let i = 0;
        let t = [];
        for (i = 0; i < this.obj.length; i++) {
            if (this.obj[i]['value'] instanceof Object) {
                t.push("Key: " + this.obj[i]['key'] + "  Value: " + JSON.stringify(this.obj[i]['value']));
            } else {
                t.push("Key: " + this.obj[i]['key'] + "  Value: " + this.obj[i]['value']);
            }
        }
        console.log(t)
    }

}

let m = new myMap();
m.put(1, 'anurag');
m.put(1, 'gaurav');
m.put(2, { a: 45 });
m.put('t', { a: 45 });
m.put(7, [1, 2, 3]);
console.log(m);
console.log("Size of map is : " + m.size);
console.log(m.has())



console.log(m.printMap())