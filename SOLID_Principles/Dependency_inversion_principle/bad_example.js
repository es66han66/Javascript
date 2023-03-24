class RequestMaker {
    constructor(){
        this.requestMethod = "http"
    }

    request(element){
        console.log("request for", element, " will happen through", this.requestMethod)
    }
}

class MyItems{
    constructor(items){
        this.items = items
        this.requestMaker = new RequestMaker()
    }

    requestItems(){
        this.items.forEach(element => {
            this.requestMaker.request(element)
        });
    }
}

new MyItems(["eshan", "hello"]).requestItems()

// here if we want our request through https, it can't happen