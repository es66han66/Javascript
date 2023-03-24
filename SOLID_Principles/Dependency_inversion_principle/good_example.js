class RequestMaker1 {
    constructor(){
        this.requestMethod = "http"
    }

    request(element){
        console.log("request for", element, " will happen through", this.requestMethod)
    }
}

class RequestMaker2 {
    constructor(){
        this.requestMethod = "https"
    }

    request(element){
        console.log("request for", element, " will happen through", this.requestMethod)
    }
}

class MyItems{
    constructor(items, requester){
        this.items = items
        this.requestMaker = requester
    }

    requestItems(){
        this.items.forEach(element => {
            this.requestMaker.request(element)
        });
    }
}

new MyItems(["eshan", "hello"], new RequestMaker1()).requestItems()

new MyItems(["hello1", "eshan1"], new RequestMaker2()).requestItems()