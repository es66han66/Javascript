class Shape{
    render(value){
        console.log("rendered ",value)
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

class Square extends Shape{
    constructor(length){
        super()
        this.length = length
    }

    getArea() {
        return this.length * this.length
    }
}

const arr = [new Rectangle(5,6), new Rectangle(3,4), new Square(5)]

for(let a of arr){
    a.render(a.getArea())
}

// in case of square when we called area we got wrong result