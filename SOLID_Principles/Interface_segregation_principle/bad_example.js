class User{
    constructor(settings){
        this.settings = settings
        this.setup()
    }

    setup(){
        this.rootSetting = this.settings.rootSetting
        this.newModule.setup()
    }
}

// new User({
//     rootSetting: {
//         "name": "eshan"
//     }
// }) // gives error