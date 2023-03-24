class check{
    constructor(settings){
        this.settings = settings
        this.options = settings.options
        this.setup(this.settings)
    }

    setup() {
        this.rootNode = this.settings.rootNode
        this.setupOptions()
    }

    setupOptions() {
        if(this.options.newModule){
            console.log("do on new module")
        }
    }
}

new check({
    options: {
        newModule: "new"
    },
    rootNode: "root"
})

new check({
    rootNode: "root",
    options: {}
})