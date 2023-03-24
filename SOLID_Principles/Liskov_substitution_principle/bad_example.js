class Rectangle{
    constructor(){
        this.width = 0
        this.height = 0
    }

    setWidth(width){
        this.width = width
    }

    setHeight(height){
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    render(value){
        console.log("rendered ",value)
    }
}

class Square extends Rectangle{
    setWidth(width){
        this.width = width
        this.height = width
    }

    setHeight(height){
        this.width = height
        this.height = height
    }
}

const arr = [new Rectangle(), new Rectangle(), new Square()]

for(let a of arr){
    a.setWidth(5)
    a.setHeight(6)
    a.render(a.getArea())
}

// in case of square when we called area we got wrong result