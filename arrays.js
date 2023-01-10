class CustomArray {
    array = [];
    constructor() {
        this.array = [];
    }

    insert(value) {
        this.array.push(value);
    }

    removeAt(index) {
        if(index < 0 || index >= this.array.length)
            throw "IllegalArgumentException";

        let newArray = [];
        for (let i = 0; i < this.array.length; i++) {
            if(i === index)
                continue;
            newArray.push(this.array[i]);
        }
        this.array = newArray;
    }

    // O(n ^ 2)
    intersect(array2) {
        let newArray = [];
        for (let i = 0; i < array2.array.length; i++) {
            for (let m = 0; m < this.array.length; m++) {
                if(array2.array[i] === this.array[m])
                    newArray.push(array2.array[i]);
            }
        }
        return newArray;
    }

    // O(n)
    reverse() {
        let newArray = [];
        for (let i = this.array.length; i >= 0; i--) {
            newArray.push(this.array[i]);
        }
        return newArray;
    }

    // O(n)
    insertAt(value, index) {
        let newArray = [];
        for (let i = 0; i < this.array.length; i++) {
            if(i === index)
                newArray.push(value);
            newArray.push(this.array[i]);
        }
        return newArray;
    }

    // O(n)
    max() {
        let max = 0;
        for (let i = 0; i < this.array.length; i++) {
            if(this.array[i] > max)
                max = this.array[i];
        }
        return max;
    }
}

array = new CustomArray();
array.insert(10);
array.insert(20);
array.insert(30);
array.insert(40);
array.insert(50);

array2 = new CustomArray();
array2.insert(20);
array2.insert(40);
array2.insert(70);

//array.removeAt(2);
//console.log(array);
//console.log("max is: " + array.max());
//console.log(array.intersect(array2));
//console.log(array.reverse());
console.log(array.insertAt(70, 2));


